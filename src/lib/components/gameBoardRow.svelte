<script lang="ts">
	import GameBoardGuess from './gameBoardGuess.svelte';
	import GameBoardResolution from './gameBoardResolution.svelte';

	export let guesses: number[] = [];
	export let resolution: number[] = [0, 0];
	export let remainingAnswersCount: number = 0;
	export let maxAnswers: number = 0;
	export let showRemainingAnswersCount: boolean = true;
	export let showJudge: boolean = true;
</script>

<div class="gameBoardRow">
	{#if guesses[0] > 0}
		<GameBoardGuess {guesses} />
		<GameBoardResolution {resolution} {remainingAnswersCount} {maxAnswers} {showRemainingAnswersCount} {showJudge} columns={guesses.length} />
	{/if}
</div>

<style>
	.gameBoardRow {
		display: flex;
		justify-content: center;
		margin-top: 5px;
		margin-bottom: 5px;
		flex-wrap: wrap;
		gap: 0.5em;
		min-height: 30px;
	}
</style>
