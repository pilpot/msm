<script lang="ts">
	import GameBoardGuess from './gameBoardGuess.svelte';
	// @ts-ignore
	import { Dot } from 'attractions';
	export let answer: number[] = [];
	export let columns: number = 5;
</script>

<div class="answerRow">
	{#if answer.length > 0}
		<GameBoardGuess guesses={answer} />
	{:else}
		<GameBoardGuess guesses={Array(columns).fill(0)} />
	{/if}
</div>

<style>
	.answerRow {
		display: flex;
		align-items: baseline;
		justify-content: flex-start;
		opacity: 0.7;
	}
</style>
