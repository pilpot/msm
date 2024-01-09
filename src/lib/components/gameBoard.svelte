<script lang="ts">
  // @ts-ignore
	import { Card, Divider } from 'attractions';
	import GameBoardRow from './gameBoardRow.svelte';
	import GameBoardAnswer from './gameBoardAnswer.svelte';
	import GameBoardForm from './gameBoardForm.svelte';
	export let boardGuesses: number[][];
	export let boardResolutions: number[][];
	export let remainingAnswersCount: number[];
	export let answer: number[];
	export let sessionId: string;
	export let colors: string[];
  export let status: 'idle' | 'playing' | 'won' | 'lost';
</script>

<Card class="gameBoard">
  {#if status === 'won'}Well done!<Divider />{/if}
	<GameBoardAnswer {answer} />
	<Divider />
	{#each boardGuesses as guess, i}
		<GameBoardRow
			guesses={guess}
			resolution={boardResolutions[i]}
			remainingAnswersCount={remainingAnswersCount[i]}
		/>
	{/each}
	<Divider />
	{#if status !== 'won'}
		<GameBoardForm {sessionId} {colors} />
	{/if}
</Card>

<style>
	:global.gameBoard {
		background-color: #ccc !important;
		padding: 10px;
		width: 400px;
    overflow: visible!important;
	}
</style>
