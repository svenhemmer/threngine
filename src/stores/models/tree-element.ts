import type {
    BoxGeometry,
    ConeGeometry,
    RingGeometry,
    TubeGeometry,
    TorusGeometry,
    PlaneGeometry,
    CircleGeometry,
    SphereGeometry,
    CylinderGeometry,

    LineBasicMaterial,
    MeshBasicMaterial,
    MeshPhongMaterial,

    Mesh
} from 'three';

type Geometry = BoxGeometry | ConeGeometry | RingGeometry | TubeGeometry | PlaneGeometry | TorusGeometry | CircleGeometry | SphereGeometry | CylinderGeometry;

type Material = MeshBasicMaterial | LineBasicMaterial | MeshPhongMaterial;

export type TreeElement = {
    geometry: Geometry;
    material: Material;
    element: Mesh;
}

export type LightElement = {
    color: string;
    intensity: number;
    position: {
        x: number;
        y: number;
        z: number;
    }
}