<script>
	import responses from '$lib/assets/responses';
	import random from '$lib/helpers/random';
	import { time } from 'three/tsl';
	import ResultWord from './ResultWord.svelte';
	import Duck from '../duck/Duck.svelte';
	let { prompt, resultsEl } = $props();

	let words = prompt.split(' ');

	let duckEl = null;
	let serverEl = null;

	let currentDisplayedWords = $state(0);
	let splitWords = $derived(words.slice(0, currentDisplayedWords));

	const duration = random(100) + 100 * words.length;
	const serverDuration = duration + 1000;

	const incrementTime = duration / words.length;
	const increment = () => {
		currentDisplayedWords++;

		if (currentDisplayedWords < words.length) {
			resultsEl.scrollTop = resultsEl.scrollHeight;
			setTimeout(increment, incrementTime);
		}
	};
	increment();

	const timestampRaw = new Date(Math.random() * new Date().getTime());
	const timestamp = timestampRaw.toLocaleString('en-IE', { timeZone: 'UTC' });

	setTimeout(() => {
		duckEl.innerHTML = '🦆';
		setTimeout(() => {
			serverEl.innerHTML = `Message recieved: ${timestamp}`;
		}, 200);
	}, serverDuration);
</script>

<div class="result" style={`--duration: ${serverDuration}ms`}>
	<!-- {currentDisplayedWords} -->
	<p>
		{#each splitWords as word}
			<ResultWord {word} />
		{/each}
	</p>
	<p bind:this={duckEl} class="duck">
		<span>.</span><span>.</span><span>.</span>
	</p>
	<span bind:this={serverEl} class="server">{random(responses)}...</span>
</div>

<style>
	.result {
		background: #fff;
		padding: 0.5rem 1rem;
		border-radius: 0.5rem;
		margin-bottom: 1rem;
		display: grid;
		grid-template-columns: 100%;
	}
	p {
		max-width: 100%;
		background: #f9f9f9;
		width: max-content;
		padding: 0.25rem 0.5rem;
		border-radius: 0.5rem;
		margin-bottom: 0.5rem;
	}
	.duck {
		justify-self: end;
		text-align: right;
		animation: shrink 0.2s ease-in;
		animation-fill-mode: forwards;
		animation-delay: var(--duration);
		span {
			animation: load 1s infinite;
			animation-fill-mode: both;
			&:nth-child(1) {
				animation-delay: 0s;
			}
			&:nth-child(2) {
				animation-delay: 0.125s;
			}
			&:nth-child(3) {
				animation-delay: 0.25s;
			}
		}
	}

	@keyframes load {
		0% {
			opacity: 0;
		}
		25% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0;
		}
	}

	.server {
		font-family: monospace;
		text-align: right;
		width: 100%;
		display: inline-block;
		text-transform: lowercase;
		color: #ccc;
	}
</style>
