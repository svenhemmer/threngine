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

import type { Field } from '../../gui-data-utils/models';

type FieldDescription = {
    name: string;
    field: string;
    sub?: FieldDescription[]; 
}

type BoxFields = {
    description: FieldDescription[];
    dimensions: {
        width: Field<number>;
        height: Field<number>;
        depth: Field<number>;
    },
    segments: {
        width: Field<number>;
        height: Field<number>;
        depth: Field<number>;
    }
}

export type GeometryWrapper = {
    name: 'Box' | 'Cone' | 'Ring' | 'Tube' | 'Plane' | 'Torus' | 'Circle' | 'Sphere' | 'Cylinder';
    fields?: BoxFields;
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