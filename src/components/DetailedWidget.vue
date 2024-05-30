<template>
    <div class="detail-widget-wrapper">
        <div v-if="!!store.widget">
            <component :is="store.widget" />
        </div>
        <div v-else>
            No component selected yet!
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useSelectionStore } from '../stores';
export default defineComponent({
    setup() {
        const store = useSelectionStore();
        return {
            store
        };
    }
})
</script>

<style>
.detail-widget-wrapper {
    border: 3px solid blue;
    border-radius: 3px;
    width: 100%;
    height: 100%;
    padding: .5rem;
    max-height: 70vh;
    overflow-y: auto;
}
</style>