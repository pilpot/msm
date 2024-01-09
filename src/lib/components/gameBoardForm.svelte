<script lang="ts">
	import { browser } from '$app/environment';
	import { enhance } from '$app/forms';
	// @ts-ignore
	import { Button } from 'attractions';
	import GameBoardPicker from '$lib/components/gameBoardPicker.svelte';

	export let sessionId: string;
	export let colors: string[];

	let guesspos0 = browser ? window.sessionStorage.getItem('guess[0]') ?? '1' : '';
	let guesspos1 = browser ? window.sessionStorage.getItem('guess[1]') ?? '2' : '';
	let guesspos2 = browser ? window.sessionStorage.getItem('guess[2]') ?? '3' : '';
	let guesspos3 = browser ? window.sessionStorage.getItem('guess[3]') ?? '4' : '';
	let guesspos4 = browser ? window.sessionStorage.getItem('guess[4]') ?? '5' : '';
	// The same but directly in an array
	//let guess: number[] = browser ? window.sessionStorage.getItem('guess')?.split(',').map((x) => parseInt(x)) ?? [1, 2, 3, 4, 5] : [];
</script>

<form
	action="?/submitGuess"
	method="post"
	enctype="multipart/form-data"
	use:enhance
	style="display:flex;"
>

	<div style="display: flex;justify-content: flex-space-around; max-width: 189px;">
		<GameBoardPicker {colors} id="guess[0]" value={parseInt(guesspos0)}></GameBoardPicker>
		<GameBoardPicker {colors} id="guess[1]" value={parseInt(guesspos1)}></GameBoardPicker>
		<GameBoardPicker {colors} id="guess[2]" value={parseInt(guesspos2)}></GameBoardPicker>
		<GameBoardPicker {colors} id="guess[3]" value={parseInt(guesspos3)}></GameBoardPicker>
		<GameBoardPicker {colors} id="guess[4]" value={parseInt(guesspos4)}></GameBoardPicker>
	</div>
	<div style="display: flex;margin-left:15px;">
	<Button small filled type="submit">Make a guess</Button>
	</div>
	<!--<input bind:value={guesspos4} on:change={() => sessionStore('guesspos4', guesspos4)} type="number" name="guess[4]"/>-->
	<input type="hidden" name="sessionId" value={sessionId} />
</form>
