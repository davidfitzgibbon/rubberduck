<script>
	import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
	import { T, useTask, useLoader } from '@threlte/core';
	import { OrbitControls } from '@threlte/extras';
	import { SheetObject } from '@threlte/theatre';
	import Lights from './Lights.svelte';
	import Screens from './Screens.svelte';

	let rotation = $state(0);
	useTask((delta) => {
		rotation += delta;
	});

	const duck = useLoader(GLTFLoader).load('/scene.glb');

	let cameraRef = $state();

	const camera = 'a';
</script>

{#if camera == 'a'}
	<T.PerspectiveCamera
		makeDefault
		position={[0, 10, -20]}
		oncreate={(ref) => {
			cameraRef = ref;
			cameraRef.lookAt(0, 5, 5);
		}}
	>
		<OrbitControls />
	</T.PerspectiveCamera>
{/if}

{#if camera == 'b'}
	<T.PerspectiveCamera
		makeDefault
		position={[3, 8, 19]}
		oncreate={(ref) => {
			cameraRef = ref;
			cameraRef.lookAt(3, 8, 20);
		}}
	>
		<OrbitControls />
	</T.PerspectiveCamera>
{/if}

<Lights />

<Screens />

{#if $duck}
	<!-- <SheetObject key="Duck">
		{#snippet children({ Transform, Sync })} -->
	<T is={$duck.scene} scale={8} />
	<!-- {/snippet}
	</SheetObject> -->
{/if}
