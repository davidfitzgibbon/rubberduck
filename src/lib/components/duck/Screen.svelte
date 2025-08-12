<script>
	import { RepeatWrapping, Vector2, TextureLoader } from 'three';
	import { T, useTask } from '@threlte/core';
	import { useTexture } from '@threlte/extras';
	import random from '$lib/helpers/random';

	const randomDir = () => {
		return Math.random() * 2 - 1;
	};

	let { position } = $props();
	let offsetVector = new Vector2(randomDir(), randomDir());
	// console.log(offsetVector);
	offsetVector.multiplyScalar(Math.random() * 99);
	let offset = new Vector2(offsetVector.x, offsetVector.y);

	const noisex = random(0.2) * 0.2;
	const noisey = noisex * 2;
	const scaleOfNoise = 0.1;
	const texture = useTexture('/noise.jpg', {
		transform: (texture) => {
			texture.wrapS = RepeatWrapping;
			texture.wrapT = RepeatWrapping;
			texture.repeat.set(noisex * scaleOfNoise, noisey * scaleOfNoise);

			return texture;
		}
	});

	let rotation = $state(Math.PI);

	let first = true;

	useTask((delta) => {
		// offset.add(offsetVector);
		if ($texture) {
			$texture.offset = offset;
			if (first) {
				console.log($texture.offset);
				first = false;
			}
		}
		// console.log($texture.offset);
	});
</script>

{#if $texture}
	<T.Mesh {position} rotation={[rotation, 0, 0]} scale={[4.5, 3.1, 1]}>
		<T.PlaneGeometry />
		<T.MeshBasicMaterial map={$texture} />
	</T.Mesh>
{/if}
