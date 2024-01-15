<script lang="ts">
	// @ts-ignore
	import { Dot } from 'attractions';
	import { fly, fade, slide } from 'svelte/transition';
	export let resolution: number[] = [0, 0];
	export let remainingAnswersCount: number = 0;
	export let maxAnswers: number = 0;
	export let columns: number = 5;
	export let showRemainingAnswersCount: boolean = true;
	export let showJudge: boolean = true;
</script>

<div class="resolution" transition:slide>
	<div class="resolutionRow">
		{#each Array(resolution[0]) as _, j}
			<Dot style="background-color: #FFF;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
		{#each Array(resolution[1]) as _, j}
			<Dot style="background-color: #000;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
		{#each Array(columns - resolution[0] - resolution[1]) as _, j}
			<Dot style="background-color: transparent;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
	</div>
	{#if showRemainingAnswersCount}
		<div class="remainingAnswers" transition:slide={{ axis : 'x' }}>
			{remainingAnswersCount > 0 ? remainingAnswersCount : ''}
		</div>
	{/if}
	{#if showJudge}
		<div class="judge" transition:slide={{ axis : 'x' }}>
			<!-- 
				low is one third of maxAnswers
				high is two thirds of maxAnswers
				optimal is maxAnswers
			-->
			<meter
				min={-maxAnswers}
				max="-1"
				high={-Math.round(maxAnswers / 3)}
				low={-Math.round(maxAnswers / 2)}
				optimum="-1"
				value={-remainingAnswersCount}
			/>
		</div>
	{/if}
</div>

<style>
	.resolution {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
	}
	.resolutionRow {
		display: flex;
		align-items: center;
		margin-left: 15px;
		justify-content: space-around;
		gap: 0.2em;
	}
	.remainingAnswers {
		display: flex;
		width: 70px;
		text-align: center;
		color: #f7f7f7;
		justify-content: center;
	}
	.judge {
		display: flex;
	}
</style>
