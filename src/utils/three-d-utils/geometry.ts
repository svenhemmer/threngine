import { BoxGeometry, CircleGeometry, ConeGeometry, CylinderGeometry, PlaneGeometry, RingGeometry, SphereGeometry, TorusGeometry } from "three";
import { GeometryWrapper } from "./models/geometry";
import { createField } from "../gui-data-utils/input-fields";

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

const boxGeometry: GeometryWrapper = {
    name: 'Box',
    fields: boxFields,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new BoxGeometry(
            boxGeometry.fields![0].sub![0].field!.getValue() as number,
            boxGeometry.fields![0].sub![1].field!.getValue() as number,
            boxGeometry.fields![0].sub![2].field!.getValue() as number,
            boxGeometry.fields![1].sub![0].field!.getValue() as number,
            boxGeometry.fields![1].sub![1].field!.getValue() as number,
            boxGeometry.fields![1].sub![2].field!.getValue() as number
        );
        geom.rotateX(boxGeometry.rotation.x);
        geom.rotateY(boxGeometry.rotation.y);
        geom.rotateZ(boxGeometry.rotation.z);
        geom.translate(boxGeometry.position.x, boxGeometry.position.y, boxGeometry.position.z);
        return geom;
    }       
}

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

const circleGeometry: GeometryWrapper = {
    name: 'Circle',
    fields: circleFields,
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new CircleGeometry(
            circleGeometry.fields![0].sub![0].field!.getValue() as number,
            circleGeometry.fields![1].sub![0].field!.getValue() as number,
            circleGeometry.fields![2].sub![0].field!.getValue() as number,
            circleGeometry.fields![2].sub![1].field!.getValue() as number
        );
        geom.rotateX(boxGeometry.rotation.x);
        geom.rotateY(boxGeometry.rotation.y);
        geom.rotateZ(boxGeometry.rotation.z);
        geom.translate(boxGeometry.position.x, boxGeometry.position.y, boxGeometry.position.z);
        return geom;
    }       
}

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

const coneGeometry: GeometryWrapper = {
    name: 'Cone',
    fields: coneFields,
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new ConeGeometry(
            coneGeometry.fields![0].sub![0].field!.getValue() as number,
            coneGeometry.fields![0].sub![1].field!.getValue() as number,
            coneGeometry.fields![1].sub![0].field!.getValue() as number,
            coneGeometry.fields![1].sub![1].field!.getValue() as number,
            coneGeometry.fields![1].sub![2].field!.getValue() as boolean,
            coneGeometry.fields![2].sub![0].field!.getValue() as number,
            coneGeometry.fields![2].sub![1].field!.getValue() as number,
        );
        return geom;
    }       
}

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
        { name: 'Length', field: createField('length', 2 * Math.PI) }
    ]}
];

const cylinderGeometry: GeometryWrapper = {
    name: 'Cylinder',
    fields: cylinderFields,
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new CylinderGeometry(
            cylinderGeometry.fields![0].sub![0].field!.getValue() as number,
            cylinderGeometry.fields![0].sub![1].field!.getValue() as number,
            cylinderGeometry.fields![0].sub![2].field!.getValue() as number,
            cylinderGeometry.fields![1].sub![0].field!.getValue() as number,
            cylinderGeometry.fields![1].sub![1].field!.getValue() as number,
            cylinderGeometry.fields![1].sub![2].field!.getValue() as boolean,
            cylinderGeometry.fields![2].sub![0].field!.getValue() as number,
            cylinderGeometry.fields![2].sub![1].field!.getValue() as number,
        );
        return geom;
    }       
}

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

const planeGeometry: GeometryWrapper = {
    name: 'Plane',
    fields: planeFields,
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new PlaneGeometry(
            planeGeometry.fields![0].sub![0].field!.getValue() as number,
            planeGeometry.fields![0].sub![1].field!.getValue() as number,
            planeGeometry.fields![1].sub![0].field!.getValue() as number,
            planeGeometry.fields![1].sub![1].field!.getValue() as number,
        );
        return geom;
    }       
}

const ringGeometry: GeometryWrapper = {
    name: 'Ring',
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new RingGeometry(ringGeometry.position.x, ringGeometry.position.y, ringGeometry.position.z );
        return geom;
    }       
}

const sphereGeometry: GeometryWrapper = {
    name: 'Sphere',
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new SphereGeometry(sphereGeometry.position.x, sphereGeometry.position.y, sphereGeometry.position.z );
        return geom;
    }       
}

const torusGeometry: GeometryWrapper = {
    name: 'Torus',
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new TorusGeometry(torusGeometry.position.x, torusGeometry.position.y, torusGeometry.position.z );
        return geom;
    }       
}

export const geometries: GeometryWrapper[] = [
    boxGeometry,
    circleGeometry,
    coneGeometry,
    cylinderGeometry,
    planeGeometry,
    ringGeometry,
    sphereGeometry,
    torusGeometry
]