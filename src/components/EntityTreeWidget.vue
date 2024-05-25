<template>
    <div>
        <input type="button" @click="toggleCamera" :class="isSelected('camera') ? 'selected': ''" value="Camera">
        <input type="button" @click="toggleScene" :class="isSelected('scene') ? 'selected': ''" value="Scene">
    </div>
</template>

<script lang="ts">
import CameraWidget from './three-components/CameraWidget.vue';
import SceneWidget from './three-components/SceneWidget.vue';
import { defineComponent } from 'vue';
import { useSelectionStore } from '../stores';

export default defineComponent({
    name: 'EntityTreeWidget',
    components: {
        CameraWidget,
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

        const isSelected = (what: 'camera' | 'scene') => {
            switch(what) {
                case 'camera': return selectionStore.widget == CameraWidget;
                case 'scene': return selectionStore.widget == SceneWidget;
                default: return false;
            }
        }

        return {
            toggleCamera, toggleScene, selectionStore, isSelected
        };
    }
})
</script>

<style>
.selected { 
    background-color: green;
}
</style>