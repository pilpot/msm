<script>
	// @ts-ignore
	import { Headline } from 'attractions';
	// global scss 
	import '../global.scss';
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="crossorigin" />
	<link
		href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@600&display=swap"
		rel="stylesheet"
	/>
	<title>MasterSuperMind</title>
</svelte:head>
<Headline>MasterSuperMind</Headline>
<slot />

<style>
	:global(body) {
		font-family: 'Noto Sans', sans-serif;
	}
</style>
