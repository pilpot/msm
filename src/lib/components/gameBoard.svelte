<script lang="ts">
	// @ts-ignore
	import { Card, Divider, Chip, Headline } from 'attractions';
	import GameBoardRow from './gameBoardRow.svelte';
	import GameBoardAnswer from './gameBoardAnswer.svelte';
	import GameBoardForm from './gameBoardForm.svelte';
	export let boardGuesses: number[][];
	export let boardResolutions: number[][];
	export let remainingAnswersCount: number[];
	export let maxAnswers: number;
	export let answer: number[];
	export let sessionId: string;
	export let colors: string[];
	export let status: 'idle' | 'playing' | 'won' | 'lost';
	export let error_message: string;
</script>

<Card class="gameBoard">
	<center><Headline style="color:#FFF;filter: drop-shadow(-3px 5px 10px #000000); margin-bottom:0.5em;">MasterSuperMind</Headline></center>
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

<style>
	.gameBoardContent {
		background: #ffffff2e;
		padding: 2em;
		border-radius: 1.25em;
		padding-bottom:1em;
	}
	.gameBoardRows {
		min-height: 250px;
	}
</style>
