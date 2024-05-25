import { Scene, GridHelper } from "three";
import type { AssistanceGrid } from "./models/assistance-grid";

export const assistanceGrid: (scene: Scene) => AssistanceGrid = (scene: Scene) => {
    let _size = 10;
    let _division = 10;
    let _gripHelper: GridHelper;

    return {
        enable: (shouldEnable: boolean) => {
            if (shouldEnable) {
                _gripHelper = new GridHelper(_size, _division);
                scene.add(_gripHelper);
                
            } else if(!!_gripHelper) {
                scene.remove(_gripHelper);
            }
        },
        setSize: (size: number) => { _size = size },
        setDivision: (division: number) => { _division = division }
    }
}