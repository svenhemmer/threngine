import { defineStore } from "pinia";
import { shallowRef } from 'vue';
import { camera as cam, scene as scn, renderer as rndr } from "../utils/three-d-utils";

export const useThreeStore = defineStore('three', () => {
    const camera = shallowRef(cam);
    const scene = shallowRef(scn);
    const renderer = shallowRef(rndr);

    return {
        camera, scene, renderer
    }
});