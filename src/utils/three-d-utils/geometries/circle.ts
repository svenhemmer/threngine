import { CircleGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT } from "./constants";

import type { GeometryWrapper } from "../models/geometry";


const circleFields = [
    { name: 'Dimensions', sub: [
        { name: 'Radius', field: createField('radius', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Amount', field: createField('amount', 20) }
    ]},
    { name: 'Angle', sub: [
        { name: 'Start', field: createField('start', 0) },
        { name: 'Length', field: createField('length', 2 * Math.PI) }
    ]}
];

export const circleGeometry: GeometryWrapper = {
    name: 'Circle',
    fields: circleFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new CircleGeometry(
            circleGeometry.fields![0].sub![0].field!.getValue() as number,
            circleGeometry.fields![1].sub![0].field!.getValue() as number,
            circleGeometry.fields![2].sub![0].field!.getValue() as number,
            circleGeometry.fields![2].sub![1].field!.getValue() as number
        );
    }       
}