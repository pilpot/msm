<script>
	// @ts-ignore
	import { Card, Button, H2 } from 'attractions';
	import { page } from '$app/stores';   
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

<Card tight style="display:flex;flex-direction:row;flex-wrap: wrap;align-content: center;justify-content: center;align-items: center;margin-bottom: 1em;gap: 1em;padding:0.5em;">
	<H2 style="margin:0;">MasterSuperMind</H2>
	<Button filled={$page.url.pathname === '/'} href="/">Home</Button>
	<Button filled={$page.url.pathname === '/daily'} href="/daily">Daily</Button>
	<Button filled={$page.url.pathname === '/custom'} href="/custom">Custom</Button>
	<Button filled={$page.url.pathname === '/multiplayer'} href="/multiplayer">Multiplayer</Button>
	<Button filled={$page.url.pathname === '/settings'} href="/settings">Settings</Button>
</Card>

<slot />
