<script lang="ts">
  import { Headline, Subhead, Button, Card, Dot, Divider, Label, Slider, H1 } from 'attractions';
  export let data;
</script>
<style>
:global.board {
  background-color: #CCC!important;
  padding: 10px;
  width: 300px;
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
  color:#4d4d4d;
}
</style>
<Headline>MasterSuperMind</Headline>
<Subhead>Here is a solved game for you :)</Subhead>
<br>
<!-- Implement the display of a game object here-->
<Card class="board">
  <div class="answerrow">
  {#each data.game.answer as colorpin}
    <Dot style="background-color:{data.colors[colorpin]};display:inline-block;height:25px;width:25px;"/>
  {/each}
  </div>
  <Divider />
  {#each data.game.board as row, i}
    <div class="completerow">
      <div class="boardrow">
      {#each row as colorpin}
        <Dot style="background-color:{data.colors[colorpin]};display:inline-block;height:25px;width:25px;"/>
      {/each}
      </div>
      <div class="resolutionrow">
      {#each Array(data.game.resolution[i][0]) as _, j}
        <Dot style="background-color: #FFF;display:inline-block;height:15px;width:15px"></Dot>
      {/each}
      {#each Array(data.game.resolution[i][1]) as _, j}
        <Dot style="background-color: #000;display:inline-block;height:15px;width:15px"></Dot>
      {/each}
      {#each Array(5 - data.game.resolution[i][0] - data.game.resolution[i][1]) as _, j}
        <Dot style="background-color: #CCC;display:inline-block;height:15px;width:15px"></Dot>
      {/each}
      </div>
      <div class="remainingAnswers">
        {data.game.remainingAnswersCount[i] > 0 ? data.game.remainingAnswersCount[i] : ''}
      </div>
    </div>
  {/each}
  <div style="text-align: center">
    <br>
    <Label>I {data.game.status} this game in {data.game.attempts+1} attempts</Label>
  </div>
</Card>
<br>
<Card style="max-width: 280px;">
  <H1>Options</H1>
  <Label small>Colors</Label>
  <Slider
  value={8}
  min={4}
  max={12}
  step={1}
  tooltips="active"
  ticks={{mode: 'values', values: [4, 5, 6, 7, 8, 9, 10, 11, 12]}}
  />
  <br>
  <br>
  <Label>Columns</Label>
  <Slider
  value={5}
  min={4}
  max={7}
  step={1}
  tooltips="active"
  ticks={{mode: 'values', values: [4, 5, 6, 7]}}
  />
  <br>
  <br>
  <Button filled small on:click={data.game.runGameSequence}>New Game</Button>
</Card>