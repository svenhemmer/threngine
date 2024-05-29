<template>
    <div>Element Widget</div>
    <fieldset><legend>Geometry</legend>
        <span>Type: <select v-model="geoType">
            <option v-for="(geom, index) in geometries" :value="index">{{ geom.name }}</option>
        </select></span>
        <fieldset><legend>Position</legend>
            <span>x: <input v-model="x"></span>
            <span>y: <input v-model="y"></span>
            <span>z: <input v-model="z"></span>
        </fieldset>
        <fieldset><legend>Rotation</legend>
            <span>x: <input v-model="rx"></span>
            <span>y: <input v-model="ry"></span>
            <span>z: <input v-model="rz"></span>
        </fieldset>
    </fieldset>
    <fieldset><legend>Material</legend>
        <span>Color: <input v-model="color"></span>
    </fieldset>
    <input type="button" value="Add" @click="addElement()">
</template>

<script lang="ts">

import * as THREE from 'three';
import { defineComponent, ref } from 'vue';
import { geometries as geoms } from '../../utils/three-d-utils';
import { useThreeStore } from '../../stores';

import type { GeometryWrapper } from '../../utils/three-d-utils/models';

export default defineComponent({
    setup() {

        const store = useThreeStore();

        const geometries = ref(geoms);

        const x = ref(0);
        const y = ref(0);
        const z = ref(0);
        const rx = ref(0);
        const ry = ref(0);
        const rz = ref(0);

        const geoType = ref(0);

        const color = ref('#00ff00');

        const addElement = () => {
            const wrapper: GeometryWrapper = geometries.value[geoType.value];
            
            const { threeContext } = store;

            const geometry = wrapper.create();
            // const geometry = new THREE.BoxGeometry( 1, 1, 1 );
            const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
            const element = new THREE.Mesh( geometry, material );
            console.log(geometry, material, element);
            
            threeContext.scene.add(element);
        }

        return {
            x, y, z,
            rx, ry, rz,
            color, geometries, geoType,
            addElement
        }
    }
})
</script>

<style scoped>
fieldset {
    display: flex;
    flex-direction: column;
}
</style>