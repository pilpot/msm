<script lang="ts">
	// @ts-ignore
	import { Dot } from 'attractions';

	export let guesses: number[] = [];

	const colors = [
		'conic-gradient(from 180deg,violet,blue,green,yellow,orange,red,violet)',
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

<div class="guessRow" {...$$restProps}>
	{#each guesses as guess}
		<Dot style="background:{colors[guess]};display:inline-block;height:25px;width:25px;filter: drop-shadow(0px 0px 2px #804000);" />
	{/each}
	<slot />
</div>

<style>
	.guessRow {
		display: flex;
		align-items: baseline;
		justify-content: space-around;
		width: 189px;
	}
</style>
