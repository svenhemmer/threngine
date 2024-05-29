import {
    BoxGeometry, 
    ConeGeometry,
    RingGeometry,
    TubeGeometry,
    PlaneGeometry,
    TorusGeometry,
    CircleGeometry,
    SphereGeometry,
    CylinderGeometry
} from 'three';

export type GeometryWrapper = {
    name: 'Box' | 'Cone' | 'Ring' | 'Tube' | 'Plane' | 'Torus' | 'Circle' | 'Sphere' | 'Cylinder';
    position: {
        x: number;
        y: number;
        z: number;
    };
    rotation: {
        x: number;
        y: number;
        z: number;
    }
    create: () => BoxGeometry | ConeGeometry | RingGeometry | TubeGeometry | PlaneGeometry | TorusGeometry | CircleGeometry | SphereGeometry | CylinderGeometry;
}