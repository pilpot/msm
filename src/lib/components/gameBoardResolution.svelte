<script lang="ts">
	// @ts-ignore
	import { Dot } from 'attractions';

	export let resolution: number[] = [0, 0];
	export let remainingAnswersCount: number = 0;
	export let maxAnswers: number = 0;
</script>

<div class="resolution">
	<div class="resolutionRow">
		{#each Array(resolution[0]) as _, j}
			<Dot style="background-color: #FFF;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
		{#each Array(resolution[1]) as _, j}
			<Dot style="background-color: #000;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
		{#each Array(5 - resolution[0] - resolution[1]) as _, j}
			<Dot style="background-color: transparent;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
	</div>
	<div class="remainingAnswers">
		{remainingAnswersCount > 0 ? remainingAnswersCount : ''}
	</div>
	<div class="judge">
		<!-- 
			low is one third of maxAnswers
			high is two thirds of maxAnswers
			optimal is maxAnswers
		-->
		<meter
			min={-maxAnswers}
			max="-1"
			high={Math.round(-maxAnswers / 3)}
			low={-Math.round((maxAnswers * 2) / 3)}
			optimum="-1"
			value={-remainingAnswersCount}
		/>
	</div>
</div>

<style>
	.resolution {
		display: flex;
	}
	.resolutionRow {
		display: flex;
		align-items: center;
		margin-left: 15px;
		justify-content: space-around;
		width: 100px;
	}
	.remainingAnswers {
		width: 70px;
		text-align: center;
		color: #f7f7f7;
	}
</style>
