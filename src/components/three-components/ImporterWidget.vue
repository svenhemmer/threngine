<template>
    <div>Element Widget</div>
    <div class="form">
        <fieldset><legend>Source</legend>
            <input ref="modelFileSelectButton" type="file" accept=".gltf" hidden>
            <button @click="triggerModelFileSelect">Select model</button>
        </fieldset>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { useThreeStore } from '../../stores';

export default defineComponent({

    setup() {

        const modelFileSelectButton = ref(null);

        onMounted(() => {
            const element = modelFileSelectButton.value! as HTMLInputElement;
            if (!element) {
                return;
            }
            element.addEventListener('change', () => {
                if (!element.files?.length) return;
                const file = element.files[0]
                const reader = new FileReader();
                reader.addEventListener('load', (event) => { 
                    const content = event.target?.result as string 
                    const loader = new GLTFLoader();
                    loader.parse(content, '', (model) => {
                        const { threeContext, glsfModels } = useThreeStore()
                        threeContext.scene.add(model.scene);
                        glsfModels.push(model);
                    }, () => {
                        console.log('Error');
                        
                    });
                });
                reader.readAsText(file);
            })
        })
        
        const triggerModelFileSelect = () => {
            const element = modelFileSelectButton.value! as HTMLInputElement;
            element.click();
        }
    
        return {
            triggerModelFileSelect, modelFileSelectButton
        }
    }

});
</script>

<style scoped>
fieldset {
    display: flex;
    flex-direction: column;
    border-radius: .5rem;
    padding: .5rem;
    gap: .25rem
}

.form {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>