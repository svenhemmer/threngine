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

    Mesh
} from 'three';

type Geometry = BoxGeometry | ConeGeometry | RingGeometry | TubeGeometry | PlaneGeometry | TorusGeometry | CircleGeometry | SphereGeometry | CylinderGeometry;

type Material = MeshBasicMaterial | LineBasicMaterial;

export type TreeElement = {
    geometry: Geometry;
    material: Material;
    element: Mesh;
}