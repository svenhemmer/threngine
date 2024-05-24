<template>
    <div class="threeWrapperDiv">
        <div ref="threeContainer" class="threeDiv"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import type { Ref } from 'vue';
import * as THREE from 'three';

export default defineComponent({
    name: 'ThreeDPreview',
    setup() {
        const threeContainer: Ref<HTMLDivElement | undefined> = ref();

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        const initThree = () => {
            renderer.setSize(threeContainer.value!.offsetWidth, threeContainer.value!.offsetHeight);
            threeContainer.value!.appendChild(renderer.domElement);
        }

        onMounted(() => {
            initThree();
            const animate = () => {
                requestAnimationFrame( animate );
                renderer.render( scene, camera );
            }
            animate();
        });

        return {
            threeContainer
        }
    }
});
</script>

<style>
.threeWrapperDiv {
    width: 100%;
    height: 100%;
    border: 3px solid blue;
}

.threeDiv {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>