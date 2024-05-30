import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { assistanceGrid } from './assistance-grid';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
camera.position.y = 2;
camera.position.z = 5;

const controls = new OrbitControls( camera, renderer.domElement );

const add2Scene = scene.add;
const grid = assistanceGrid(scene);

const activateAssistanceGrid = () => {
    grid.enable(true);
}
const deactivateAssistanceGrid = () => {
    grid.enable(false);
}

const resizeRatio = ({ width, height }: { width: number, height: number}) => {
    renderer.setSize(width, height);
    camera.aspect = width/height;
    camera.updateProjectionMatrix();
}

scene.add( new THREE.AmbientLight('#ffffff', 1) );

activateAssistanceGrid();

export const threeContext = {
    scene, camera, renderer, add2Scene, controls,

    activateAssistanceGrid, deactivateAssistanceGrid, grid,

    resizeRatio
}