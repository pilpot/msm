<script lang="ts">
	import { browser } from '$app/environment';
	import { clickoutside } from '@svelte-put/clickoutside';

	function sessionStore(field: string, value: string) {
		if (browser) window.sessionStorage.setItem(field, value);
	}

	// Initial value
	export let id = 'guess';
	export let value: number = 1;
	export let colors: string[] = [];
	export let colorsCount: number = 8;

	// Keyboard shortcut
	let trigger = 'Escape';
	function handleKeydown(e: KeyboardEvent) {
		if (e.key == trigger) {
			ddActive = false;
		}
	}

	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target) && !event.defaultPrevented) {
				node.dispatchEvent(new CustomEvent('click_outside', node));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	let windowHeight: number;
	let top: boolean;

	let ddActive = false;

	let ddHeight = 158;
	// ddHeight is initially undefined so we can't get the correct values from binding; that's why we have a default
	// todo render offscreen for .1sec to get the height automatically?

	let inputHeight: number;

	async function toggleDropdown(e: MouseEvent) {
		// hide all other dropdowns
		document.querySelectorAll('.values-dropdown').forEach((dd) => {
			// set to display none
			dd.setAttribute('style', 'display:none;');
		});
		document.querySelectorAll('.select-color').forEach((dd) => {
			// remove class fake-focus
			dd.classList.remove('fake-focus');
		});

		if (
			e.clientY + inputHeight < ddHeight ||
			windowHeight - ddHeight - inputHeight - e.clientY > 0
		) {
			top = false;
		} else {
			top = true;
		}

		ddActive = !ddActive;

		//await tick();
		if (ddActive) {
			//document.querySelector('.color-block.active').focus();
		}
	}

	function clickOutsideDropdown() {
		ddActive = false;
	}

	function changeValue(innerValue: string) {
		value = colors.indexOf(innerValue);
		sessionStore(id, value.toString());
		// hide error div
		document?.querySelector('#error')?.setAttribute('style', 'display:none;');
		ddActive = false;
	}

	/* function keyboardGridNav(e, index) {
		const focusedElement = document.activeElement.id;

		let myRow = parseInt(focusedElement.charAt(focusedElement.length - 3));
		let myIndex = parseInt(focusedElement.charAt(focusedElement.length - 1));
		let nextRow;
		let prevRow;
		let nextIndex;
		let prevIndex;

		switch (e.keyCode) {
			// left arrow
			case 37:
				prevIndex = myIndex - 1;
				if (prevIndex > -1) {
					document.getElementById(id + '-' + myRow + '-' + prevIndex).focus();
				}
				break;
			// top arrow
			case 38:
				prevRow = myRow - 1;
				if (prevRow > -1) {
					document.getElementById(id + '-' + prevRow + '-' + myIndex).focus();
				}
				break;
			// right arrow
			case 39:
				nextIndex = myIndex + 1;
				if (nextIndex < values[0].length) {
					document.getElementById(id + '-' + myRow + '-' + nextIndex).focus();
				}
				break;
			// down arrow
			case 40:
				nextRow = myRow + 1;
				if (nextRow < values.length) {
					document.getElementById(id + '-' + nextRow + '-' + myIndex).focus();
				}
				break;
		}
	} */
</script>

<svelte:window bind:innerHeight={windowHeight} on:keydown={handleKeydown} />

<div class="color-picker-holder">
	<div class="color-picker-inner">
		<button
			id={id + '-button'}
			bind:clientHeight={inputHeight}
			class="select-color"
			on:click|preventDefault={(e) => toggleDropdown(e)}
			class:fake-focus={ddActive}
			use:clickoutside on:clickoutside={clickOutsideDropdown}
		>
			<div style="display: flex;">
				<div style="background: {colors[value]};" class="color-block"></div>
				<div class="caret" class:top style="margin-right: .2rem;"></div>
			</div>
		</button>
		<input type="hidden" bind:value name={id} />
	</div>

	{#if ddActive}
		<div class:top bind:clientHeight={ddHeight} class="values-dropdown" use:clickoutside on:clickoutside={clickOutsideDropdown}>
			<div class="values-dropdown-grid">
				{#each colors as val, index}
					{#if index !== 0 && index < colorsCount + 1}
						<button
							id="{id}-{index}"
							class:active={colors.indexOf(val) == value}
							style="background: {val};"
							on:click={() => {
								changeValue(val);
							}}
							class="color-block"
						>
						</button>
					{/if}
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	.color-picker-holder {
		position: relative;
	}

	.color-picker-inner {
		display: flex;
		height: 35px;
	}

	.select-color {
		border: 1px solid #545454c7;
		padding: 4px;
		border-radius: 50%;
		background: #ccc;
		height: 35px;
		width: 35px;
		filter: drop-shadow(0px 0px 2px #804000);
	}

	.caret {
		display: none;
		width: 0;
		height: 0;
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-top: 4px solid #555;
		position: relative;
		top: 10px;
		margin-left: 4px;
	}

	.caret.top {
		border-left: 4px solid transparent;
		border-right: 4px solid transparent;
		border-bottom: 4px solid #555;
		border-top: none;
	}

	.active {
		box-shadow:
			inset 0 0 0 1px #fff,
			0 0 3px 1px rgba(0, 0, 0, 0.8);
	}

	.fake-focus,
	input:focus,
	button:focus {
		outline: 0;
		box-shadow: 0 0 0 2px #18a0fb;
		border-color: #18a0fb;
	}

	input {
		border: 1px solid #ccc;
		height: 35px;
		border-radius: 0.2rem;
	}

	.color-block {
		border-radius: 50%;
		width: 25px;
		height: 25px;
		line-height: 0;
		font-size: 0;
	}

	.values-dropdown {
		padding: 6px;
		position: absolute;
		z-index: 1;
		top: 38px;
		background: #ccc;
		border: 1px solid #8d6767;
		border-radius: 0.3rem;
	}

	.values-dropdown-grid {
		grid-template-columns: repeat(4, 24px);
		grid-template-rows: 25px 25px;
		grid-gap: 5px;
		display: grid;
	}

	.values-dropdown.top {
		top: auto;
		bottom: 40px;
	}

	.values-dropdown button {
		border: none;
		border-radius: 50%;
	}
</style>
