import {
    boxGeometry,
    circleGeometry,
    coneGeometry,
    cylinderGeometry,
    planeGeometry,
    ringGeometry,
    sphereGeometry,
    torusGeometry
} from './geometries';
import type { GeometryWrapper } from "./models/geometry";

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