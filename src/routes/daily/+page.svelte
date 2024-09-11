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
		'#7a5142',
		'#ff4600',
		'#9d9d9d'
	];
</script>
<GameBoard
		boardGuesses={form?.body?.boardGuesses || data.boardGuesses}
		boardResolutions={form?.body?.boardResolutions || data.boardResolutions}
		remainingAnswersCount={form?.body?.remainingAnswersCount || data.remainingAnswersCount}
		sessionId={data.sessionId || ''}
		{colors}
		colorsCount={form?.body?.colors || data.colors}
		allowDuplicates={form?.body?.allowDuplicates || data.allowDuplicates}
		columns={form?.body?.columns || data.columns}
		status={form?.body?.status || data.status}
		answer={form?.body?.answer || data.answer}
		error_message={form?.message || ''}
		maxAnswers={form?.body?.maxAnswers || data.maxAnswers}
	/>