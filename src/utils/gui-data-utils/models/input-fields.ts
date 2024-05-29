export type FieldType = 'number' | 'string' | 'boolean';

export type Field<FType extends number | string | boolean> = {
    getName: () => string;
    setValue: (value: string) => void;
    getValue: () => FType;
}

export type FieldDescription = {
    name: string;
    field: string;
    sub?: FieldDescription[]; 
}