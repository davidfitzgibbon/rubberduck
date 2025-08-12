<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="stylesheet" href="style.css" />
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="content">
	{@render children?.()}
</div>

<style>
	.content {
		min-height: 100vh;
		max-width: 600px;
		margin: 0 auto;
		position: relative;
		background: #f5f5f5;
		padding: 0 1rem;
	}
</style>
