<script>
	let { prompts } = $props();

	let prompt = $state('');
	let promptEl = null;

	const showResults = (e) => {
		e.preventDefault();
		prompts.push(prompt);
		prompt = '';
	};
</script>

<form onsubmit={(e) => showResults(e)}>
	<textarea
		name="prompt"
		id="prompt"
		bind:this={promptEl}
		bind:value={prompt}
		placeholder="Type your prompet for Rubber AI here..."
	></textarea>
	<button type="submit">Generate</button>
</form>

<style>
	textarea {
		width: 100%;
		display: block;
		field-sizing: content;
		min-height: 3rem;
		max-height: 6rem;
		padding: 0.5rem 1rem;
		margin-bottom: 0.5rem;
	}
	button {
		padding: 0.5rem 1rem;
		float: right;
		border: none;
		background: red;
		color: white;
		border-radius: 0.25rem;
	}
</style>
