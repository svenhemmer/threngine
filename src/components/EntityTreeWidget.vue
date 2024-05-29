<template>
    <div class="entity-tree-wrapper">
        <input type="button" @click="toggleCamera" :class="isSelected('camera') ? 'selected': ''" value="Camera">
        <input type="button" @click="toggleScene" :class="isSelected('scene') ? 'selected': ''" value="Scene">
        <input type="button" @click="activateLightWidget" value="Add Light">
        <input type="button" @click="activateElementWidget" value="Add Element">
    </div>
</template>

<script lang="ts">
import CameraWidget from './three-components/CameraWidget.vue';
import ElementWidget from './three-components/ElementWidget.vue';
import LightWidget from './three-components/LightWidget.vue';
import SceneWidget from './three-components/SceneWidget.vue';

import { defineComponent } from 'vue';
import { useSelectionStore } from '../stores';

export default defineComponent({
    name: 'EntityTreeWidget',
    components: {
        CameraWidget,
        ElementWidget,
        LightWidget,
        SceneWidget
    },
    setup() {
        const selectionStore = useSelectionStore();

        const toggleCamera = () => {
            selectionStore.widget = selectionStore.widget == CameraWidget ? null: CameraWidget        
        }

        const toggleScene = () => {
            selectionStore.widget = selectionStore.widget == SceneWidget ? null: SceneWidget        
        }

        const activateLightWidget =() => {
            selectionStore.widget = LightWidget;
        }

        const activateElementWidget =() => {
            selectionStore.widget = ElementWidget;
        }

        const isSelected = (what: 'camera' | 'scene') => {
            switch(what) {
                case 'camera': return selectionStore.widget == CameraWidget;
                case 'scene': return selectionStore.widget == SceneWidget;
                default: return false;
            }
        }

        return {
            activateLightWidget, activateElementWidget, toggleCamera, toggleScene, selectionStore, isSelected
        };
    }
})
</script>

<style>
.selected { 
    background-color: green;
}

.entity-tree-wrapper {
    border: 3px solid blue;
    border-radius: .5rem;
    width: 100%;
    height: 100%;
    padding: .5rem;
}
</style>