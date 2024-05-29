<template>
    <fieldset>
        <legend>Grid <input type="checkbox" :checked="gridActive" @change="activateGrid"></legend>
        <span>Size: <input @change="setSize" :disabled="!gridActive" v-model="size"></span>
        <span>Division: <input @change="setDivision" :disabled="!gridActive" v-model="divisions"></span>
    </fieldset>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useThreeStore } from '../../stores';

export default defineComponent({

    setup() {
        const store = useThreeStore();
        const { threeContext } = store;
        const { grid } = threeContext;

        const gridActive = ref(grid.isActive());
        const size = ref(grid.getSize());
        const divisions = ref(grid.getDivisions());

        const activateGrid = (event: Event) => {
            const target = event.target as HTMLInputElement;
            gridActive.value = target.checked;
            grid.enable(target.checked);
        }

        const setSize = (event: Event) => {
            const target = event.target as HTMLInputElement;
            const newSize = parseFloat(target.value);
            if (!!newSize) {
                grid.setSize(newSize);
            }
            size.value = grid.getSize();
        }

        const setDivision = (event: Event) => {
            const target = event.target as HTMLInputElement;
            const newDivisions = parseFloat(target.value);
            if (!!newDivisions) {
                grid.setDivision(newDivisions);
            }
            divisions.value = grid.getDivisions();
        }

        return {
            gridActive, activateGrid, setSize, setDivision, grid, size, divisions
        }
    }

});
</script>

<style scoped>
span { 
    display: flex;
    justify-content: space-between;
}
</style>