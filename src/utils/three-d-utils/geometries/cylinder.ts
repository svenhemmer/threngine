import { CylinderGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT, FULL_CIRCLE_ARC } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const cylinderFields = [
    { name: 'Dimensions', sub: [
        { name: 'Radius top', field: createField('radiusTop', 1) },
        { name: 'Radius bottom', field: createField('radiusBottom', 1) },
        { name: 'Height', field: createField('height', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Radial', field: createField('radial', 20) },
        { name: 'Height', field: createField('height', 5) },
        { name: 'Open ended', field: createField('openEnded', false) },
    ]},
    { name: 'Angle', sub: [
        { name: 'Start', field: createField('start', 0) },
        { name: 'Length', field: createField('length', FULL_CIRCLE_ARC) }
    ]}
];

export const cylinderGeometry: GeometryWrapper = {
    name: 'Cylinder',
    fields: cylinderFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new CylinderGeometry(
            cylinderGeometry.fields![0].sub![0].field!.getValue() as number,
            cylinderGeometry.fields![0].sub![1].field!.getValue() as number,
            cylinderGeometry.fields![0].sub![2].field!.getValue() as number,
            cylinderGeometry.fields![1].sub![0].field!.getValue() as number,
            cylinderGeometry.fields![1].sub![1].field!.getValue() as number,
            cylinderGeometry.fields![1].sub![2].field!.getValue() as boolean,
            cylinderGeometry.fields![2].sub![0].field!.getValue() as number,
            cylinderGeometry.fields![2].sub![1].field!.getValue() as number,
        );
    }       
}