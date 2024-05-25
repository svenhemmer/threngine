<template>
    <div v-if="!!store.widget">
        <component :is="store.widget" />
    </div>
    <div v-else>
        No component selected yet!
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSelectionStore } from '../stores';
import CameraWidget from './three-components/CameraWidget.vue';
export default defineComponent({
    components: {
        CameraWidget
    },
    setup() {
        const store = useSelectionStore();
        return {
            store
        };
    }
})
</script>