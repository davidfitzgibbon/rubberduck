<script>
	import Form from './Form.svelte';
	import Results from './Results.svelte';

	let prompts = $state([]);

	let responsesEl = $state();
	let resultsEl = $state(false);
</script>

<div class="interface">
	<Results {resultsEl} {prompts} />
	<Form {resultsEl} {prompts} />
</div>

<style>
	.interface {
		position: absolute;
		bottom: 2rem;
		width: 100%;
	}
</style>
