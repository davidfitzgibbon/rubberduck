<script>
	import Duck from '$lib/components/duck/Duck.svelte';
	import Interface from '$lib/components/Interface/Interface.svelte';
</script>

<div class="duck">
	<Duck />
</div>
<div class="interface">
	<Interface />
</div>

<style>
	.duck,
	.interface {
		position: absolute;
		height: 50%;
		width: calc(100% - 2rem);
		left: 1rem;
	}
	.duck {
		top: 0;
	}
	.interface {
		bottom: 0;
	}
</style>
