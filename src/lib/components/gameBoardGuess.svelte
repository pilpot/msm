<script lang="ts">
  // @ts-ignore
  import { Dot } from 'attractions';

  export let guesses: number[] = [];

  const colors = ["#CCC", "#FFF", "#000", "#a93226", "#2e86c1", "#28b463", "#f4d03f", "#a569bd", "#8d6e63"];
</script>

<div class='guessRow' {...$$restProps}>
  {#each guesses as guess}
    <Dot style="background-color:{colors[guess]};display:inline-block;height:25px;width:25px;" />
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