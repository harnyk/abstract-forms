import { FieldComponentResolver } from '../../forms/types/core';
import { ChoiceField } from './fields/ChoiceField';
import { NumberField } from './fields/NumberField';
import { PriceField } from './fields/PriceField';
import { TextField } from './fields/TextField';
import { SBCoreFieldDescriptor } from './types';

const fieldComponentMap = {
    text: TextField,
    number: NumberField,
    price: PriceField,
    choice: ChoiceField,
} as const;

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBCoreFieldDescriptor
> = (field) => {
    return fieldComponentMap[field.type];
};
