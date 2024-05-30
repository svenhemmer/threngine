import { SphereGeometry } from "three";
import { createField } from "../../gui-data-utils/input-fields";
import { DEFAULT_POS, DEFAULT_ROT } from "./constants";

import type { GeometryWrapper } from "../models/geometry";

const sphereFields = [
    { name: 'Dimensions', sub: [
        { name: 'Radius', field: createField('radius', 1) }
    ]},
    { name: 'Segments', sub: [
        { name: 'Width', field: createField('width', 15) },
        { name: 'Height', field: createField('height', 15) }
    ]},
    { name: 'Angle', sub: [
        { name: 'Phi start', field: createField('phiStart', 0) },
        { name: 'Phi length', field: createField('phiLength', 2 * Math.PI) },
        { name: 'Theta start', field: createField('thetaStart', 0) },
        { name: 'Theta length', field: createField('thetaLength', 2 * Math.PI) }
    ]}
];
export const sphereGeometry: GeometryWrapper = {
    name: 'Sphere',
    fields: sphereFields,
    position: DEFAULT_POS,
    rotation: DEFAULT_ROT,
    create: () => {
        return new SphereGeometry(
            sphereGeometry.fields![0].sub![0].field!.getValue() as number,
            sphereGeometry.fields![1].sub![0].field!.getValue() as number,
            sphereGeometry.fields![1].sub![1].field!.getValue() as number,
            sphereGeometry.fields![2].sub![0].field!.getValue() as number,
            sphereGeometry.fields![2].sub![1].field!.getValue() as number,
            sphereGeometry.fields![2].sub![2].field!.getValue() as number,
            sphereGeometry.fields![2].sub![3].field!.getValue() as number
        );
    }       
}