<script lang="ts">
	import GameBoardGuess from './gameBoardGuess.svelte';
	export let answer: number[] = [];
</script>

<div class="answerRow">
	{#if answer.length > 0}
		<GameBoardGuess guesses={answer} />
	{:else}
		Answer unknown
	{/if}
</div>

<style>
  .answerRow {
    display: flex;
		align-items: baseline;
		justify-content: space-around;
		width: 150px;
  }
</style>