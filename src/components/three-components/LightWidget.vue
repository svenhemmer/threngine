<template>
    LightWidget
    <div class="form">
        <fieldset><legend>Ambient light</legend>
            <span>Color: <input v-model="ambientColor"></span>
            <span>Intensitivy: <input v-model="ambientIntensity"></span>
            <div class="button-wrapper">
                <button @click="saveAmbientLight">Save</button>
                <button @click="removeAmbientLight">Remove</button>
            </div>
        </fieldset>
        <fieldset><legend>Additional lights</legend>
            <span>Color: <input v-model="currentColor"></span>
            <span>Intensitivy: <input v-model="currentIntensity"></span>
            <fieldset><legend>Position</legend>
                <span>x: <input v-model="x"></span>
                <span>y: <input v-model="y"></span>
                <span>z: <input v-model="z"></span>
            </fieldset>
            <div class="button-wrapper">
                <button @click="addPointLight">Add</button>
            </div>
        </fieldset>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { AmbientLight, PointLight } from 'three';
import { useThreeStore } from '../../stores';

export default defineComponent({
    setup() {

        const store = useThreeStore();
        const { ambientLight, threeContext, additionalLights } = store;

        const ambientColor = ref(ambientLight.color);
        const ambientIntensity = ref(ambientLight.intensitivy);

        const currentColor = ref('#ffffff');
        const currentIntensity = ref(10);
        const x = ref(0);
        const y = ref(0);
        const z = ref(0);

        const saveAmbientLight = () => {
            const color = ambientColor.value
            const intensitivy = ambientIntensity.value;
            store.ambientLight.color = color;
            store.ambientLight.intensitivy = intensitivy;
            removeAmbientLight();
            threeContext.scene.add(new AmbientLight(color, intensitivy));
        }

        const removeAmbientLight = () => {
            const { scene } = threeContext;
            var lights = scene.children.filter(child => child.type === 'AmbientLight');
            lights.forEach(light => scene.remove(light));
        }

        const addPointLight = () => {
            const light = new PointLight(currentColor.value, currentIntensity.value, 0, 2);
            light.position.set(x.value, y.value, z.value);
            additionalLights.push({
                color: currentColor.value,
                intensity: currentIntensity.value,
                position: {
                    x: x.value, 
                    y: y.value, 
                    z: z.value
                }
            });
            threeContext.scene.add(light)
        }

        return {
            ambientColor, ambientIntensity,
            currentColor, currentIntensity, x, y, z,
            saveAmbientLight, removeAmbientLight, addPointLight
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

.button-wrapper {
    display: flex;
    justify-content: space-between;
    gap: .5rem;
}

.button-wrapper > button {
    flex-grow: 1;
}
</style>