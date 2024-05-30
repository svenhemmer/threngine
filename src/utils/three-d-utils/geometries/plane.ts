import { PlaneGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const planeFields = [
    { name: 'Dimensions', sub: [
        { name: 'Width', field: createField('width', 1) },
        { name: 'Height', field: createField('height', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Width', field: createField('width', 5) },
        { name: 'Height', field: createField('height', 5) }
    ]}
];

export const planeGeometry: GeometryWrapper = {
    name: 'Plane',
    fields: planeFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new PlaneGeometry(
            planeGeometry.fields![0].sub![0].field!.getValue() as number,
            planeGeometry.fields![0].sub![1].field!.getValue() as number,
            planeGeometry.fields![1].sub![0].field!.getValue() as number,
            planeGeometry.fields![1].sub![1].field!.getValue() as number,
        );
    }       
}