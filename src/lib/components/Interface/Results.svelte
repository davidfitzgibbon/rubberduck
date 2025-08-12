<script>
	import Result from './Result.svelte';
	let { prompts, resultsEl } = $props();

	$effect(() => {
		if (prompts.length) {
			resultsEl.scrollTop = resultsEl.scrollHeight;
		}
	});
</script>

<div class="results" bind:this={resultsEl}>
	{#each prompts as prompt}
		<Result {resultsEl} {prompt} />
	{/each}
</div>

<style>
	.results {
		max-height: calc(50vh - 5em);
		overflow: scroll;
		scroll-behavior: smooth;
		border-radius: 1rem;
	}
</style>
