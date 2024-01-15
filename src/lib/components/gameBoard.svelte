<script lang="ts">
	// @ts-ignore
	import { Card, Divider, Chip, Headline, H2, Switch, Button, Label, Loading } from 'attractions';
	import GameBoardRow from './gameBoardRow.svelte';
	import GameBoardAnswer from './gameBoardAnswer.svelte';
	import GameBoardForm from './gameBoardForm.svelte';
	import GameBoardGuess from './gameBoardGuess.svelte';
	import gameBoardUISettings from './gameBoardUISettings';
	import { enhance } from '$app/forms';
	import { fly, fade, slide } from 'svelte/transition';
	export let boardGuesses: number[][];
	export let boardResolutions: number[][];
	export let remainingAnswersCount: number[];
	export let maxAnswers: number;
	export let answer: number[];
	export let sessionId: string;
	export let colors: string[];
	export let colorsCount: number;
	export let allowDuplicates: boolean;
	export let columns: number;
	export let status: 'idle' | 'playing' | 'won' | 'lost';
	export let error_message: string;
	// group all game board settings in one object
	export let UISettings: gameBoardUISettings = {
		showRemainingAnswersCount: true,
		showJudge: true,
	};

	function setLoading(loading: boolean) {
		document.getElementById('loadingRow')!.style.display = loading ? 'block' : 'none';
	}

</script>

<div class="gameBoardHolder">
	<Card class="gameBoard">
		<center
			><Headline style="color:#FFF;filter: drop-shadow(-3px 5px 10px #000000); margin-bottom:0.5em;"
				>MasterSuperMind</Headline
			></center
		>
		<div class="gameBoardContent">
			<GameBoardAnswer {answer} {columns} />
			<Divider style="margin-bottom: 1em;" />
			<div class="gameBoardRows">
				{#each boardGuesses as guess, i}
					<GameBoardRow
						guesses={guess}
						resolution={boardResolutions[i]}
						remainingAnswersCount={remainingAnswersCount[i]}
						{maxAnswers}
						showRemainingAnswersCount={UISettings.showRemainingAnswersCount}
						showJudge={UISettings.showJudge}
					/>
				{/each}
				<div id="loadingRow" style="display: none;margin-top: 1em;">
					<div style="zoom:3;opacity:0.8;"><Loading/></div>
				</div>
			</div>
			<Divider style="margin-bottom: 1em;" />

			{#if status !== 'won'}
				<div transition:slide><GameBoardForm {sessionId} {colors} {colorsCount} {columns} /></div>
			{/if}
			{#if error_message}<div id="error" transition:slide><Chip small class="errorChip">{error_message}</Chip></div>{/if}
			{#if status === 'won'}<div transition:slide><Chip small class="successChip">Well done!</Chip></div>{/if}
		</div>
	</Card>
	<Card class="gameBoardOptions" style="diplay: flex;align-items: center;background-color: #d4cccc; margin-top: 1em;">
		<H2>Options</H2>
		<div class="options">
			{#if status !== 'won'}
		<form action="?/helpMe" method="post" enctype="multipart/form-data" use:enhance={({}) => {
			setLoading(true);
			return async ({ update }) => {
				await update();
				setLoading(false);
			};
		}}>
			<Button small outline type="submit">Help me out 🪄</Button>
		</form>
		{/if}
		<Switch bind:value={UISettings.showRemainingAnswersCount}><span class="ml">Show remaining answers count</span></Switch>
		<Switch bind:value={UISettings.showJudge}><span class="ml">Show judge meter</span></Switch>
		<Label style="margin-bottom:-0.8em;">{colorsCount} {allowDuplicates ? '': 'Unique'} Colors x {columns} Columns = {maxAnswers} Combinations</Label>
		<GameBoardGuess guesses={Array.from({ length: colorsCount }, (_, i) => i + 1)} columns=8/>
	</div>
	</Card>
</div>

<style>
	.gameBoardHolder {
		max-width: max-content;
		margin: 0 auto;
	}
	.gameBoardContent {
		background: #ffffff2e;
		padding: 2em;
		border-radius: 1.25em;
		padding-bottom: 1em;
	}
	.gameBoardRows {
		min-height: 250px;
	}
	.options {
		display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 1em;
		padding: 0.5em;
	}
	.ml {
		margin-left: 0.5em;
	}
</style>
