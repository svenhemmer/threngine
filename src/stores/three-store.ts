import { defineStore } from "pinia";
import { reactive, shallowRef } from 'vue';
import { threeContext as ctx } from "../utils/three-d-utils";
import type { LightElement, TreeElement } from "./models/tree-element";

export const useThreeStore = defineStore('three', () => {
    const threeContext = shallowRef(ctx);

    const elements: TreeElement[] = reactive([]);

    const ambientLight = { intensitivy: 1, color: '#ffffff' };

    const additionalLights: LightElement[] = reactive([]);

    return {
        threeContext, elements, ambientLight, additionalLights
    }
});