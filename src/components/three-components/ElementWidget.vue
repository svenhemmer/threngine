<template>
    <div>Element Widget</div>
    <div class="form">
        <fieldset><legend>Geometry</legend>
            <span>Type: <select v-model="geoType" @change="() => { cleanup(); previewElement(); }">
                <option v-for="(geom, index) in geometries" :value="index">{{ geom.name }}</option>
            </select></span>
            <fieldset v-if="!!geometries[geoType].fields"><legend>Geometry specific</legend>
                <fieldset v-for="section in getFields()"><legend>{{ section.name }}</legend>
                    <span v-for="field in section.subs">{{ field.name }}: 
                        <input 
                            v-if="typeof (field.field!.getValue()) === 'boolean'" 
                            type="checkbox"
                            :checked="!!field.field!.getValue()"
                            v-bind:value="field.field!.getValue()" 
                            @change="(event) => updateCheckbox(event, field.field!)">
                        <input 
                            v-else 
                            v-bind:value="field.field!.getValue()" 
                            @keyup="(event) => updateValue(event, field.field!)">
                    </span>
                </fieldset>
            </fieldset>
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
    </div>
</template>

<script lang="ts">

import * as THREE from 'three';
import { defineComponent, ref, watch, onMounted } from 'vue';
import { geometries as geoms } from '../../utils/three-d-utils';
import { useThreeStore } from '../../stores';

import type { EnhancedFieldDescription, GeometryWrapper } from '../../utils/three-d-utils/models';
import type { Field } from '../../utils/gui-data-utils/models';

type GuiFieldInfo = {
    name: string;
    field?: Field<number | boolean | string>;
    hasSubs: boolean;
    subs?: GuiFieldInfo[];
}

const mapFields = (description: EnhancedFieldDescription<number | boolean | string> ): GuiFieldInfo => {
    return {
        name: description.name,
        field: description.field,
        hasSubs: !!description.sub,
        subs: description.sub?.map(mapFields)
    }
}

export default defineComponent({
    setup() {

        const store = useThreeStore();

        const geometries = geoms;

        const x = ref(0);
        const y = ref(0);
        const z = ref(0);
        const rx = ref(0);
        const ry = ref(0);
        const rz = ref(0);

        const geoType = ref(0);

        const color = ref('#00ff00');

        let lines: THREE.LineSegments<any> | null = null;
        let element: THREE.Mesh<any> | null = null;

        const getFields = (): GuiFieldInfo[] => {
            const geom = geometries[geoType.value];
            if (!geom.fields) {
                return [] as GuiFieldInfo[];
            }
            return geom.fields!.map(mapFields);
        }

        const validateNumberEntries = () => {
            return !isNaN(x.value) &&
                !isNaN(y.value) &&
                !isNaN(z.value) &&
                !isNaN(rx.value) &&
                !isNaN(ry.value) &&
                !isNaN(rz.value);
        }

        const validateColorEntry = () => {
            return /^#[0-9A-F]{6}$/i.test(color.value)
        }

        const cleanup = () => {
            if (!!element && !!lines) {
                const { threeContext } = store;
                threeContext.scene.remove(lines);
                threeContext.scene.remove(element);   
            }
            lines = null;
            element = null;
        }

        const previewElement = () => {
            cleanup();
            if (!validateNumberEntries() || !validateColorEntry()) {
                return;
            }
            const wrapper: GeometryWrapper = geometries[geoType.value];
            const { threeContext } = store;

            const geometry = wrapper.create();
            geometry.rotateX(rx.value);
            geometry.rotateY(ry.value);
            geometry.rotateZ(rz.value);

            const material = new THREE.MeshBasicMaterial( { color: color.value, blendAlpha: .5 } );
            material.transparent = true;
            material.opacity = .3;
            element = new THREE.Mesh( geometry, material );
            element.position.set(x.value, y.value, z.value)

            const lineMaterial = new THREE.LineBasicMaterial( { color: color.value } );
            lines = new THREE.LineSegments( geometry, lineMaterial );
            lines.position.set(x.value, y.value, z.value)
            
            threeContext.scene.add(lines);
            threeContext.scene.add(element);

        }

        const addElement = () => {
            console.log('Add... to be implemented');
            
        }

        const updateValue = (event: Event, field: Field<number | boolean | string>) => {
            var target = event.target as HTMLInputElement;
            field.setValue(target.value);
            previewElement();
        }

        const updateCheckbox = (event: Event, field: Field<number | boolean | string>) => {
            var target = event.target as HTMLInputElement;
            field.setValue(target.checked + '');
            previewElement();
        }

        onMounted(previewElement);

        watch(x, previewElement);
        watch(y, previewElement);
        watch(z, previewElement);
        watch(rx, previewElement);
        watch(ry, previewElement);
        watch(rz, previewElement);
        watch(color, previewElement);

        return {
            x, y, z,
            rx, ry, rz,
            color, geometries, geoType,
            addElement, getFields, 
            updateValue, updateCheckbox,
            cleanup, previewElement
        }
    }
})
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
    display: flex;
    flex-direction: column;
    gap: .5rem;
}
</style>