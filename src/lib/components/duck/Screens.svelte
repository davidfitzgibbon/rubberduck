<script>
	import { T } from '@threlte/core';
	import Screen from './Screen.svelte';

	let positions = [];

	let stepx = 5.91;
	let stepy = 4.6;
	for (let x = -stepx * 1.5; x <= stepx * 1.5; x += stepx) {
		for (let y = -stepy * 1.5; y <= stepy * 1.5; y += stepy) {
			positions.push([x, y, 0]);
		}
	}
</script>

<T.Group position={[0, 10, 23.298]}>
	{#each positions as position}
		<Screen {position} />
	{/each}
</T.Group>
