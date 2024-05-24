<template>
    <CameraTreeWidget></CameraTreeWidget>
</template>

<script lang="ts">
import CameraTreeWidget from './three-components/CameraWidget.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EntityTreeWidget',
    components: {
        CameraTreeWidget
    },
    setup() {
        return {
        };
    }
})
</script>