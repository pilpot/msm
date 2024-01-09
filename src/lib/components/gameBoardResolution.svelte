<script lang="ts">
	// @ts-ignore
	import { Dot } from 'attractions';

	export let resolution: number[] = [0, 0];
	export let remainingAnswersCount: number = 0;
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
			<Dot style="background-color: #CCC;display:inline-block;height:15px;width:15px"></Dot>
		{/each}
	</div>
	<div class="remainingAnswers">
		{remainingAnswersCount > 0 ? remainingAnswersCount : ''}
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
		width: 30px;
		text-align: center;
		color: #4d4d4d;
	}
</style>
