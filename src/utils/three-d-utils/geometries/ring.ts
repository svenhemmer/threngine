import { RingGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const ringFields = [
    { name: 'Dimensions', sub: [
        { name: 'Radius inner', field: createField('radiusInner', 1) },
        { name: 'Radius outer', field: createField('radiusOuter', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Theta', field: createField('theta', 20) },
        { name: 'Phi', field: createField('phi', 5) },
        { name: 'Open ended', field: createField('openEnded', false) },
    ]},
    { name: 'Angle', sub: [
        { name: 'Start', field: createField('start', 0) },
        { name: 'Length', field: createField('length', 2 * Math.PI) }
    ]}
];

export const ringGeometry: GeometryWrapper = {
    name: 'Ring',
    fields: ringFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new RingGeometry(
            ringGeometry.fields![0].sub![0].field!.getValue() as number,
            ringGeometry.fields![0].sub![1].field!.getValue() as number,
            ringGeometry.fields![1].sub![0].field!.getValue() as number,
            ringGeometry.fields![1].sub![1].field!.getValue() as number,
            ringGeometry.fields![2].sub![0].field!.getValue() as number,
            ringGeometry.fields![2].sub![1].field!.getValue() as number
        );
    }       
}