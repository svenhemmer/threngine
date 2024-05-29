import type { Field } from "./models";

export const createField = <FieldType extends number | string | boolean>(name: string, value: FieldType): Field<FieldType> => {
    let _value: FieldType = value;

    const setValue = (value: string) => { 
        switch (typeof _value) {
            case 'number': 
                _value = parseFloat(value) as FieldType;
                break;
            case 'boolean':
                _value = (value.toLocaleLowerCase() === 'true') as FieldType;
                break;
            default:
                _value = value as FieldType;
        }
    };

    const getValue = () => _value;

    const getName = () => name + '';

    return {
        getName, setValue, getValue 
    }

}