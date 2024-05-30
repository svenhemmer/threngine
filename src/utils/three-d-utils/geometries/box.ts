import { BoxGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const boxFields = [
    { name: 'Dimensions', sub: [
        { name: 'Width', field: createField('width', 1) },
        { name: 'Height', field: createField('height', 1) },
        { name: 'Depth', field: createField('depth', 1) },
    ]},
    { name: 'Segments for', sub: [
        { name: 'Width', field: createField('width', 1) },
        { name: 'Height', field: createField('height', 1) },
        { name: 'Depth', field: createField('depth', 1) },
    ]}
];

export const boxGeometry: GeometryWrapper = {
name: 'Box',
fields: boxFields,
position: DEFAULT_POS,
rotation: DEFAULT_ROT,
create: () => {
    return new BoxGeometry(
        boxGeometry.fields![0].sub![0].field!.getValue() as number,
        boxGeometry.fields![0].sub![1].field!.getValue() as number,
        boxGeometry.fields![0].sub![2].field!.getValue() as number,
        boxGeometry.fields![1].sub![0].field!.getValue() as number,
        boxGeometry.fields![1].sub![1].field!.getValue() as number,
        boxGeometry.fields![1].sub![2].field!.getValue() as number
    );
}       
}