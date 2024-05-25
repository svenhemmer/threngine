import { Scene, GridHelper } from "three";
import type { AssistanceGrid } from "./models/assistance-grid";

export const assistanceGrid: (scene: Scene) => AssistanceGrid = (scene: Scene) => {
    let _size = 10;
    let _division = 10;
    let _gripHelper: GridHelper | null = null;

    const enable = (shouldEnable: boolean) => {
        if (shouldEnable) {
            _gripHelper = new GridHelper(_size, _division);
            scene.add(_gripHelper);
            
        } else if(!!_gripHelper) {
            scene.remove(_gripHelper);
            _gripHelper = null;
        }
    };

    const setSize = (size: number) => {
        enable(false);
        _size = size;
        enable(true);
    }

    const setDivision = (division: number) => {
        enable(false);
        _division = division;
        enable(true);
    }

    return {
        enable,
        setSize,
        setDivision,
        getSize: () => _size,
        getDivisions: () => _division,
        isActive: () => !!_gripHelper
    }
}