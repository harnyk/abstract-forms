import { FieldComponentResolver } from '../../forms/types';
import { ChoiceField } from './fields/ChoiceField';
import { FlagField } from './fields/FlagField';
import { NumberField } from './fields/NumberField';
import { PriceField } from './fields/PriceField';
import { TextField } from './fields/TextField';
import { SBCoreFieldDescriptor } from './types';

const fieldComponentMap = {
    text: TextField,
    number: NumberField,
    price: PriceField,
    choice: ChoiceField,
    flag: FlagField,
} as const;

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBCoreFieldDescriptor
> = (field) => {
    return fieldComponentMap[field.type];
};
