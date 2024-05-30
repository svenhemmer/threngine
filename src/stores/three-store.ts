import { defineStore } from "pinia";
import { reactive, shallowRef } from 'vue';
import { threeContext as ctx } from "../utils/three-d-utils";
import type { LightElement, TreeElement } from "./models/tree-element";
import type { GLTF } from 'three/examples/jsm/loaders/GLTFLoader.d.ts';

export const useThreeStore = defineStore('three', () => {
    const threeContext = shallowRef(ctx);

    const elements: TreeElement[] = reactive([]);

    const ambientLight = { intensitivy: 1, color: '#ffffff' };

    const additionalLights: LightElement[] = reactive([]);

    const glsfModels: GLTF[] = reactive([]);

    return {
        threeContext, elements, ambientLight, additionalLights, glsfModels
    }
});