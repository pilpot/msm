<script lang="ts">
	// @ts-ignore
	import { Headline, Subhead, Button, Card, Dot, Divider, Label, Slider, H1 } from 'attractions';
	export let data;
  $: game = data.game;
</script>

<Subhead>Here is a solved game for you :)</Subhead>
<br />
<!-- Implement the display of a game object here-->
<div class="gamePanel">
<Card class="board">
	<div class="answerrow">
  {#key game.answer}
		{#each game.answer as colorpin}
			<Dot
				style="background-color:{data.colors[
					colorpin
				]};display:inline-block;height:25px;width:25px;"
			/>
		{/each}
  {/key}
	</div>
	<Divider />
	{#each game.board as row, i}
		<div class="completerow">
			<div class="boardrow">
				{#each row as colorpin}
					<Dot
						style="background-color:{data.colors[
							colorpin
						]};display:inline-block;height:25px;width:25px;"
					/>
				{/each}
			</div>
			<div class="resolutionrow">
				{#each Array(game.resolution[i][0]) as _, j}
					<Dot style="background-color: #FFF;display:inline-block;height:15px;width:15px"></Dot>
				{/each}
				{#each Array(game.resolution[i][1]) as _, j}
					<Dot style="background-color: #000;display:inline-block;height:15px;width:15px"></Dot>
				{/each}
				{#each Array(5 - game.resolution[i][0] - game.resolution[i][1]) as _, j}
					<Dot style="background-color: #CCC;display:inline-block;height:15px;width:15px"></Dot>
				{/each}
			</div>
			<div class="remainingAnswers">
				{game.remainingAnswersCount[i] > 0 ? game.remainingAnswersCount[i] : ''}
			</div>
		</div>
	{/each}
	<div style="text-align: center">
		<br />
		<Label>I {game.status} this game in {game.attempts + 1} attempts</Label>
	</div>
</Card>
<Card style="max-width: 280px; display: inline-block">
	<H1>Options</H1>
	<Label small>Colors</Label>
	<Slider
		value={8}
		min={4}
		max={12}
		step={1}
		tooltips="active"
		ticks={{ mode: 'values', values: [4, 5, 6, 7, 8, 9, 10, 11, 12] }}
	/>
	<br />
	<br />
	<Label>Columns</Label>
	<Slider
		value={5}
		min={4}
		max={7}
		step={1}
		tooltips="active"
		ticks={{ mode: 'values', values: [4, 5, 6, 7] }}
	/>
	<br />
	<br />
  <Button filled small href="/daily">Daily</Button>
  <Divider />
  <Button filled small on:click={async() => { await data.game.runGameSequence(); game=data.game; } }>New Game</Button>
	<Button outline small on:click={() => { data.game.resetGame(); game=data.game; }}>Reset</Button>
  <Button outline small on:click={() => { game=data.game; console.log(game.answer);}}>Console Log Board</Button>
</Card>
</div>

<style>
	:global.board {
		background-color: #ccc !important;
		padding: 10px;
		width: 300px;
	}
  .gamePanel {
    display: flex;
  }
	.answerrow {
		display: flex;
		align-items: baseline;
		justify-content: space-around;
		width: 150px;
	}
	.completerow {
		display: flex;
		align-items: baseline;
		margin-top: 5px;
	}
	.boardrow {
		display: flex;
		align-items: baseline;
		justify-content: space-around;
		width: 150px;
	}
	.resolutionrow {
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
