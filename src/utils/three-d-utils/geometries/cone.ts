import { ConeGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const coneFields = [
    { name: 'Dimensions', sub: [
        { name: 'Radius', field: createField('radius', 1) },
        { name: 'Height', field: createField('height', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Radial', field: createField('radial', 20) },
        { name: 'Height', field: createField('height', 5) },
        { name: 'Open ended', field: createField('openEnded', false) },
    ]},
    { name: 'Angle', sub: [
        { name: 'Start', field: createField('start', 0) },
        { name: 'Length', field: createField('length', 2 * Math.PI) }
    ]}
];

export const coneGeometry: GeometryWrapper = {
    name: 'Cone',
    fields: coneFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new ConeGeometry(
            coneGeometry.fields![0].sub![0].field!.getValue() as number,
            coneGeometry.fields![0].sub![1].field!.getValue() as number,
            coneGeometry.fields![1].sub![0].field!.getValue() as number,
            coneGeometry.fields![1].sub![1].field!.getValue() as number,
            coneGeometry.fields![1].sub![2].field!.getValue() as boolean,
            coneGeometry.fields![2].sub![0].field!.getValue() as number,
            coneGeometry.fields![2].sub![1].field!.getValue() as number,
        );
    }       
}