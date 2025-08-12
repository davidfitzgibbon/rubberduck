<script>
	import random from '$lib/helpers/random';
	let { word } = $props();
</script>

<span style={`background: hsl(${random(360)}, 100%, 80%)`}>{word}</span>

<style>
	span {
		margin: 0 0.5em 0em 0;
		display: inline-block;
		animation: fade 0.2s ease-in;
		animation-fill-mode: forwards;
		animation-delay: 500ms;
	}
	@keyframes fade {
		100% {
			background: transparent;
		}
	}
</style>
