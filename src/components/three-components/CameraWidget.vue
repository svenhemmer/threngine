<template>
    <div>Camera Widget</div>
    <fieldset><legend>Position</legend>
        <span>x: <input v-model="camera.position.x" @input="event => changePosition(event, 'x')"></span>
        <span>y: <input v-model="camera.position.y" @input="event => changePosition(event, 'y')"></span>
        <span>z: <input v-model="camera.position.z" @input="event => changePosition(event, 'z')"></span>
    </fieldset>
    <fieldset><legend>Rotation</legend>
        <span>x: <input v-model="camera.rotation.x" @input="event => changeRotation(event, 'x')"></span>
        <span>y: <input v-model="camera.rotation.y" @input="event => changeRotation(event, 'y')"></span>
        <span>z: <input v-model="camera.rotation.z" @input="event => changeRotation(event, 'z')"></span>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useThreeStore } from '../../stores';

const event2Number = (event: Event) => {
    const target = event.target as HTMLInputElement;
    return parseFloat(target.value);
}

export default defineComponent({
    name: 'CameraWidget',
    setup() {
        const store = useThreeStore();
        const { camera } = store.threeContext;

        const changePosition = (event: Event, coord: 'x' | 'y' | 'z') => {
            const num = event2Number(event);
            if(num === 0 || !!num) {
                switch(coord) {
                    case 'x':
                        camera.position.x = num;
                        break;
                    case 'y':
                        camera.position.y = num;
                        break;
                    case 'z':
                        camera.position.z = num;
                        break;
                }
            }
        }

        const changeRotation = (event: Event, coord: 'x' | 'y' | 'z') => {
            const num = event2Number(event);
            if(num === 0 || !!num) {
                switch(coord) {
                    case 'x':
                        camera.rotation.x = num;
                        break;
                    case 'y':
                        camera.rotation.y = num;
                        break;
                    case 'z':
                        camera.rotation.z = num;
                        break;
                }
            }
        }

        return {
            camera, changePosition, changeRotation
        }
    }
});
</script>

<style scoped>
fieldset {
    display: flex;
    flex-direction: column;
}
</style>