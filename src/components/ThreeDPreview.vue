<template>
    <div class="threeWrapperDiv">
        <div ref="threeContainer" class="threeDiv"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onBeforeUnmount, ref } from 'vue';
import { useThreeStore } from '../stores';
import type { Ref } from 'vue';

export default defineComponent({
    name: 'ThreeDPreview',
    setup() {
        const threeContainer: Ref<HTMLDivElement | undefined> = ref();
        const store = useThreeStore();

        const { threeContext } = store;

        const initThree = () => {
            const width = threeContainer.value!.offsetWidth;
            const height = threeContainer.value!.offsetHeight;
            threeContext.resizeRatio({ width, height });
            threeContainer.value!.appendChild(threeContext.renderer.domElement);
        }

        const onResize = () => {
            // Border of 3 => subtract 6
            const width = threeContainer.value!.offsetWidth - 6;
            const height = threeContainer.value!.offsetHeight - 6;
            threeContext.resizeRatio({ width, height });
        }

        onMounted(() => {
            initThree();
            window.addEventListener('resize', onResize);
            const animate = () => {
                requestAnimationFrame( animate );
                const { renderer, scene, camera } = threeContext;
                renderer.render( scene, camera );
            }
            animate();
        });

        onBeforeUnmount(() => {
            window.removeEventListener('resize', onResize);
        })

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
    border-radius: .5rem;
}

.threeDiv {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    margin: 0;
    padding: 0;
}
</style>../utils/threeDUtils