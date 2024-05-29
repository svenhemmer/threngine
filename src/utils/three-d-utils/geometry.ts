import { BoxGeometry, CircleGeometry, ConeGeometry, CylinderGeometry, PlaneGeometry, RingGeometry, SphereGeometry, TorusGeometry } from "three";
import { GeometryWrapper } from "./models/geometry";
import { createField } from "../gui-data-utils/input-fields";

const boxFields = {
    description: [
        { name: 'Dimensions', sub: [
            { name: 'Width' },
            { name: 'Height' },
            { name: 'Depth' },
        ]},
        { name: 'Segments', sub: [
            { name: 'Width' },
            { name: 'Height' },
            { name: 'Depth' },
        ]}
    ],
    dimensions: {
        width: createField('width', 1),
        height: createField('height', 1),
        depth: createField('depth', 1)
    },
    segments: {
        width: createField('width', 1),
        height: createField('height', 1),
        depth: createField('depth', 1)
    }
};

const boxGeometry: GeometryWrapper = {
    name: 'Box',
    fields: boxFields,
    position: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new BoxGeometry(
            boxGeometry.fields?.dimensions.width.getValue(),
            boxGeometry.fields?.dimensions.height.getValue(),
            boxGeometry.fields?.dimensions.depth.getValue(),
            boxGeometry.fields?.segments.width.getValue(),
            boxGeometry.fields?.segments.height.getValue(),
            boxGeometry.fields?.segments.depth.getValue()
        );
        geom.rotateX(boxGeometry.rotation.x);
        geom.rotateY(boxGeometry.rotation.y);
        geom.rotateZ(boxGeometry.rotation.z);
        geom.translate(boxGeometry.position.x, boxGeometry.position.y, boxGeometry.position.z);
        return geom;
    }       
}

const circleGeometry: GeometryWrapper = {
    name: 'Circle',
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new CircleGeometry(circleGeometry.position.x, circleGeometry.position.y, circleGeometry.position.z );
        return geom;
    }       
}

const coneGeometry: GeometryWrapper = {
    name: 'Cone',
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new ConeGeometry(coneGeometry.position.x, coneGeometry.position.y, coneGeometry.position.z );
        return geom;
    }       
}

const cylinderGeometry: GeometryWrapper = {
    name: 'Cylinder',
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new CylinderGeometry(cylinderGeometry.position.x, cylinderGeometry.position.y, cylinderGeometry.position.z );
        return geom;
    }       
}

const planeGeometry: GeometryWrapper = {
    name: 'Plane',
    position: { x: 1, y: 1, z: 1 },
    rotation: { x: 0, y: 0, z: 0 },
    create: () => {
        const geom = new PlaneGeometry(planeGeometry.position.x, planeGeometry.position.y, planeGeometry.position.z );
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