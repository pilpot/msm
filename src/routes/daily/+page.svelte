<script lang="ts">
	import { browser } from '$app/environment';
	import GameBoard from '$lib/components/gameBoard.svelte';
	export let data;
	export let form;

	const colors = [
		'#CCC',
		'#FFF',
		'#000',
		'#a93226',
		'#2e86c1',
		'#28b463',
		'#f4d03f',
		'#a569bd',
		'#8d6e63'
	];
</script>
{#if form && form.body}
	<GameBoard
		boardGuesses={form.body.boardGuesses}
		boardResolutions={form.body.boardResolutions}
		remainingAnswersCount={form.body.remainingAnswersCount}
		sessionId={data.sessionId}
		{colors}
		status={form.body.status}
		answer={form.body.answer}
		error_message={form?.message || ''}
		maxAnswers={form.body.maxAnswers}
	/>
{:else if data.status}
	<GameBoard
		boardGuesses={data.boardGuesses}
		boardResolutions={data.boardResolutions}
		remainingAnswersCount={data.remainingAnswersCount}
		sessionId={data.sessionId}
		{colors}
		status={data.status}
		answer={data.answer}
		error_message={form?.message || ''}
		maxAnswers={data.maxAnswers}
	/>
{/if}
