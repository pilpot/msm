<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	import { MsmGame } from '$lib/msmGame';
	// @ts-ignore
	import { Button } from 'attractions';
	import GameBoardPicker from '$lib/components/gameBoardPicker.svelte';

	export let sessionId: string;
	export let colors: string[];
	export let colorsCount: number;
	export let columns: number;
	export let gameObject: MsmGame | undefined;

	let guesspos: string[] = new Array(columns);
	// for each columns create a guesspos
	for (let i = 0; i < columns; i++) {
		guesspos[i] = browser ? window.sessionStorage.getItem(`guess[${i}]`) ?? (i + 1).toString() : '';
	}
	// let guesspos0 = browser ? window.sessionStorage.getItem('guess[0]') ?? '1' : '';
	// let guesspos1 = browser ? window.sessionStorage.getItem('guess[1]') ?? '2' : '';
	// let guesspos2 = browser ? window.sessionStorage.getItem('guess[2]') ?? '3' : '';
	// let guesspos3 = browser ? window.sessionStorage.getItem('guess[3]') ?? '4' : '';
	// let guesspos4 = browser ? window.sessionStorage.getItem('guess[4]') ?? '5' : '';

	// The same but directly in an array
	//let guess: number[] = browser ? window.sessionStorage.getItem('guess')?.split(',').map((x) => parseInt(x)) ?? [1, 2, 3, 4, 5] : [];
	function setLoading(loading: boolean) {
		document.getElementById('loadingRow')!.style.display = loading ? 'block' : 'none';
	}
</script>

<form
	action="?/submitGuess"
	method="post"
	enctype="multipart/form-data"
	use:enhance={({ cancel }) => {
		setLoading(true);
		if (gameObject) {
			gameObject.setBoardRowAvailable(guesspos.map((x) => parseInt(x)));
			gameObject.answerResolutionBoardAll();
			gameObject.eliminateAnswersAll();
			setLoading(false);
			gameObject = gameObject;
			console.log(gameObject);
			cancel();
			return () => {};
		} else {
			return async ({ update }) => {
				await update();
				setLoading(false);
			};
		}
	}}
>
	<div
		class="formBoard"
		style="display:flex;align-items: center;justify-content: space-between;flex-wrap:wrap;gap: 0.5em;"
	>
		<div style="display: flex;justify-content: space-around; gap: 0.5em;">
			{#each guesspos as pos, i}
				<GameBoardPicker {colors} {colorsCount} id="guess[{i}]" value={parseInt(pos)}
				></GameBoardPicker>
			{/each}
		</div>
		<div style="display: flex;">
			<Button small filled type="submit">Make a guess</Button>
		</div>
		<!--<input bind:value={guesspos4} on:change={() => sessionStore('guesspos4', guesspos4)} type="number" name="guess[4]"/>-->
		<input type="hidden" name="sessionId" value={sessionId} />
	</div>
</form>
