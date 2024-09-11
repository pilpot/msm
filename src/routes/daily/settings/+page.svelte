<script lang="ts">
	// @ts-ignore
	import { Table, Button, Label, DatePicker, Slider, FormField } from 'attractions';
	import { enhance } from '$app/forms';

	export let data;

	const headers = [
		{ text: 'Day', value: 'day' },
		{ text: 'Colors', value: 'colors' },
		{ text: 'Columns', value: 'columns', align: 'end' },
		{ text: 'Allow duplicates', value: 'allow_duplicates' },
		{ text: 'Answer', value: 'answer' }
	];
	const items = data.settings;
</script>

<h1>Settings</h1>

<Table {headers} {items} />

{#each items as item}
	<div style="display: flex;">
		<form use:enhance method="POST" action="?/update" style="display: flex;gap: 1em;">
			<input type="hidden" name="id" value={item.id} />
			<Label>Day</Label>
			<FormField name="day" id="day">
				<DatePicker closeOnSelection value={item.day} id="day" />
			</FormField>
			<Label>Colors</Label>
			<Slider
				value={item.colors}
				min={4}
				max={10}
				step={1}
				tooltips="active"
				ticks={{ mode: 'values', values: [4, 5, 6, 7, 8, 9, 10] }}
				name="colors"
				id="colors"
			/>
			<Label>Columns</Label>
			<Slider
				value={item.columns}
				min={3}
				max={8}
				step={1}
				tooltips="active"
				ticks={{ mode: 'values', values: [3, 4, 5, 6, 7, 8] }}
				name="columns"
				id="columns"
			/>
			<Label>Allow duplicates</Label>
			<input
				type="checkbox"
				name="allow_duplicates"
				id="allow_duplicates"
				checked={item.allow_duplicates}
			/>
			<Button filled type="submit">Update</Button>
		</form>
		<form use:enhance method="POST" action="?/delete">
			<input type="hidden" name="id" value={item.id} />
			<Button outline type="submit">Delete</Button>
		</form>
	</div>
{/each}
