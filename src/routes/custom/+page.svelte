<script lang="ts">
    // @ts-ignore
    import { Card, H1, Label, Slider, Button, Divider } from 'attractions';
	import GameBoard from '$lib/components/gameBoard.svelte';
	export let data;

	$:game = data.game;
</script>

{game.answer}
<GameBoard
	boardGuesses={game.board}
	boardResolutions={game.resolution}
	remainingAnswersCount={game.remainingAnswersCount}
	sessionId={''}
	colors={data.colors}
    colorsCount={data.colors.length}
    allowDuplicates={game.allowDuplicates}
    bind:columns={game.columns}
    status={game.status}
    answer={game.answer}
    error_message={''}
    maxAnswers={game.maxAnswers}
    bind:game
/>
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
			bind:value={game.columns}
			min={4}
			max={7}
			step={1}
			tooltips="active"
			ticks={{ mode: 'values', values: [4, 5, 6, 7] }}
		/>
		<br />
		<br />
		<Button
			filled
			small
			on:click={async () => {
				await data.game.runGameSequence();
				game = data.game;
			}}>New Game</Button
		>
		<Button
			outline
			small
			on:click={() => {
				data.game.resetGame();
				game = data.game;
			}}>Reset</Button
		>
		<Button
			outline
			small
			on:click={() => {
				game = data.game;
				console.log(game.answer);
			}}>Console Log Board</Button
		>
	</Card>