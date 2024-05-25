<template>
    <div class="threeWrapperDiv">
        <div ref="threeContainer" class="threeDiv"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { useThreeStore } from '../stores';
import type { Ref } from 'vue';

export default defineComponent({
    name: 'ThreeDPreview',
    setup() {
        const threeContainer: Ref<HTMLDivElement | undefined> = ref();
        const store = useThreeStore();

        const { threeContext } = store;

        const initThree = () => {
            threeContext.renderer.setSize(threeContainer.value!.offsetWidth, threeContainer.value!.offsetHeight);
            threeContainer.value!.appendChild(threeContext.renderer.domElement);
        }

        onMounted(() => {
            initThree();
            const animate = () => {
                requestAnimationFrame( animate );
                const { renderer, scene, camera } = threeContext;
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
</style>../utils/threeDUtils