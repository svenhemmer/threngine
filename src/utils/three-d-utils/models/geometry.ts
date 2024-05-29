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

import type { Field, FieldDescription } from '../../gui-data-utils/models';

export type EnhancedFieldDescription<T extends number | boolean | string> = FieldDescription & { field?: (Field<T>), sub?: EnhancedFieldDescription<T>[]};

export type GeometryWrapper = {
    name: 'Box' | 'Cone' | 'Ring' | 'Tube' | 'Plane' | 'Torus' | 'Circle' | 'Sphere' | 'Cylinder';
    fields?: EnhancedFieldDescription<number | boolean | string>[];
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