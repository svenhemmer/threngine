import { Scene, GridHelper } from "three";
import type { AssistanceGrid } from "./models/assistance-grid";



export const assistanceGrid: (scene: Scene) => AssistanceGrid = (scene: Scene) => {
    const SIZE = 10;
    const DIVISION = 10;

    const gridHelper = new GridHelper(SIZE, DIVISION);
    scene.add(gridHelper);
    return {
        enable: (shouldEnable: boolean) => {
            gridHelper.visible = shouldEnable;
        },
        setSize: (size: number) => {},
        setDivision: (division: number) => {}
    }
}