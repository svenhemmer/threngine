import { Scene, GridHelper } from "three";
import type { AssistanceGrid } from "./models/assistance-grid";

export const assistanceGrid: (scene: Scene) => AssistanceGrid = (scene: Scene) => {
    let _size = 10;
    let _division = 10;
    let _gripHelper: GridHelper;

    return {
        enable: (shouldEnable: boolean) => {
            console.log('Init grid!');
            if (shouldEnable) {
                _gripHelper = new GridHelper(_size, _division);
                scene.add(_gripHelper);
                console.log('Adding grid!');
                
            } else if(!!_gripHelper) {
                scene.remove(_gripHelper);
                console.log('Removing grid!');
            }
        },
        setSize: (size: number) => { _size = size },
        setDivision: (division: number) => { _division = division }
    }
}