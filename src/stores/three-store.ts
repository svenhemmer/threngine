import { defineStore } from "pinia";
import { shallowRef } from 'vue';
import { threeContext as ctx } from "../utils/three-d-utils";

export const useThreeStore = defineStore('three', () => {
    const threeContext = shallowRef(ctx);

    return {
        threeContext
    }
});