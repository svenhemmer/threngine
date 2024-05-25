export type AssistanceGrid = {
    enable: (shouldEnable: boolean) => void;
    setSize: (size: number) => void;
    setDivision: (division: number) => void;
    getSize: () => number;
    getDivisions: () => number;
    isActive: () => boolean;
}