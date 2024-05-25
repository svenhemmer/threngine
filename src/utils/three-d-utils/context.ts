import * as THREE from 'three';
import { assistanceGrid } from './assistance-grid';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
camera.position.y = 2;
camera.position.z = 5;

const add2Scene = scene.add;
const grid = assistanceGrid(scene);

const activateAssistanceGrid = () => {
    grid.enable(true);
}
const deactivateAssistanceGrid = () => {
    grid.enable(false);
}

activateAssistanceGrid();

export const threeContext = {
    scene, camera, renderer, add2Scene,

    activateAssistanceGrid, deactivateAssistanceGrid
}