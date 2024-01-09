<script lang="ts">
	import GameBoardGuess from './gameBoardGuess.svelte';
	import GameBoardResolution from './gameBoardResolution.svelte';

	export let guesses: number[] = [];
	export let resolution: number[] = [0, 0];
	export let remainingAnswersCount: number = 0;
</script>

<div class="gameBoardRow">
	{#if guesses[0] > 0}
		<GameBoardGuess {guesses} />
		<GameBoardResolution {resolution} {remainingAnswersCount} />
	{/if}
</div>

<style>
	.gameBoardRow {
		display: flex;
		align-items: baseline;
		margin-top: 5px;
	}
</style>
