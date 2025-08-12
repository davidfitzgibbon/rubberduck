<script>
	import { T, useTask, useLoader } from '@threlte/core';
	import { SheetObject } from '@threlte/theatre';

	let pointIntensity = $state(0);
	let intensityRange = 100;
	let frame = 0;
	useTask((delta) => {
		pointIntensity = Math.abs(Math.pow(Math.sin(frame * 0.005 * Math.PI), 10)) * intensityRange;
		frame++;
	});
</script>

<!-- <SheetObject key="light-position" props={{ x: -10, y: 18, z: -49 }}>
	{#snippet children({ Transform, Sync, values })} -->
<T.DirectionalLight position={[-10, 18, -49]} />
<!-- {/snippet}
</SheetObject> -->
<!-- <SheetObject key="light-point">
	{#snippet children({ Transform, Sync, values })} -->
<T.PointLight position={[-16, 19, 23]} intensity={pointIntensity} color={0xff0000}></T.PointLight>
<!-- {/snippet}
</SheetObject> -->
