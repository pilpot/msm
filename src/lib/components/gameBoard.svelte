<script lang="ts">
	// @ts-ignore
	import { Card, Divider, Chip, Headline, H2, Switch, Button } from 'attractions';
	import GameBoardRow from './gameBoardRow.svelte';
	import GameBoardAnswer from './gameBoardAnswer.svelte';
	import GameBoardForm from './gameBoardForm.svelte';
	import gameBoardUISettings from './gameBoardUISettings';
	import { enhance } from '$app/forms';
	export let boardGuesses: number[][];
	export let boardResolutions: number[][];
	export let remainingAnswersCount: number[];
	export let maxAnswers: number;
	export let answer: number[];
	export let sessionId: string;
	export let colors: string[];
	export let status: 'idle' | 'playing' | 'won' | 'lost';
	export let error_message: string;
	// group all game board settings in one object
	export let UISettings: gameBoardUISettings = {
		showRemainingAnswersCount: true,
		showJudge: true,
	};

</script>

<div class="gameBoardHolder">
	<Card class="gameBoard">
		<center
			><Headline style="color:#FFF;filter: drop-shadow(-3px 5px 10px #000000); margin-bottom:0.5em;"
				>MasterSuperMind</Headline
			></center
		>
		<div class="gameBoardContent">
			<GameBoardAnswer {answer} />
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
			</div>
			<Divider style="margin-bottom: 1em;" />

			{#if status !== 'won'}
				<GameBoardForm {sessionId} {colors} />
			{/if}
			{#if error_message}<Chip small class="errorChip">{error_message}</Chip>{/if}
			{#if status === 'won'}<Chip small class="successChip">Well done!</Chip>{/if}
		</div>
	</Card>
	<Card class="gameBoardOptions" style="diplay: flex;align-items: center;background-color: #d4cccc; margin-top: 1em;">
		<H2>Options</H2>
		<div class="options">
		<Switch bind:value={UISettings.showRemainingAnswersCount}><span class="ml">Show remaining answers count</span></Switch>
		<Switch bind:value={UISettings.showJudge}><span class="ml">Show judge meter</span></Switch>
		{#if status !== 'won'}
		<form action="?/helpMe" method="post" enctype="multipart/form-data" use:enhance>
			<Button small outline type="submit">Help me out</Button>
		</form>
		{/if}
	</div>
	</Card>
</div>

<style>
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
    margin-left: 1em;
    justify-content: flex-start;
    flex-wrap: wrap;
    flex-direction: column;
    row-gap: 0.5em;
		padding-top: 0.5em;
	}
	.ml {
		margin-left: 0.5em;
	}
</style>
