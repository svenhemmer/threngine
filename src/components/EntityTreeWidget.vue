<template>
    <div>
        EntityTreeWidget {{ name }}
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'EntityTreeWidget',
    setup() {
        const name = 'Entity Tree Widget';

        return {
            name
        };
    }
})
</script>