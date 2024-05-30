import { TorusGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT, FULL_CIRCLE_ARC } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const torusFields = [
    { name: 'Dimensions', sub: [
        { name: 'Radius', field: createField('radius', 1) },
        { name: 'Tube', field: createField('tube', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Radial', field: createField('radial', 20) },
        { name: 'Tubular', field: createField('tubular', 20) }
    ]},
    { name: 'Angle', sub: [
        { name: 'Arc', field: createField('arc', FULL_CIRCLE_ARC) },
    ]}
];

export const torusGeometry: GeometryWrapper = {
    name: 'Torus',
    fields: torusFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new TorusGeometry(
            torusGeometry.fields![0].sub![0].field!.getValue() as number,
            torusGeometry.fields![0].sub![1].field!.getValue() as number,
            torusGeometry.fields![1].sub![0].field!.getValue() as number,
            torusGeometry.fields![1].sub![1].field!.getValue() as number,
            torusGeometry.fields![2].sub![0].field!.getValue() as number
        );
    }       
}