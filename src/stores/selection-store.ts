import { defineStore } from "pinia";
import { shallowRef } from 'vue';

import type { Ref } from 'vue';

import CameraWidget from "../components/three-components/CameraWidget.vue";
import SceneWidget from "../components/three-components/SceneWidget.vue";
import LightWidget from "../components/three-components/LightWidget.vue";
import ElementWidget from "../components/three-components/ElementWidget.vue";

export const useSelectionStore = defineStore('selection', () => {
    const widget: Ref<
        null | 
        typeof CameraWidget |
        typeof ElementWidget |
        typeof LightWidget |
        typeof SceneWidget
    > = shallowRef(null);

    return { widget }
})