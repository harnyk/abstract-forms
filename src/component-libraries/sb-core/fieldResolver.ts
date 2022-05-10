import { FieldComponentResolver } from '../../forms/types';
import { ChoiceField } from './fields/ChoiceField';
import { FlagField } from './fields/FlagField';
import { NumberField } from './fields/NumberField';
import { PriceField } from './fields/PriceField';
import { TextField } from './fields/TextField';
import { SBCoreFieldDescriptor } from './types';

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBCoreFieldDescriptor
> = (field) => {
    switch (field.type) {
        case 'text':
            return TextField;
        case 'number':
            return NumberField;
        case 'price':
            return PriceField;
        case 'choice':
            return ChoiceField;
        case 'flag':
            return FlagField;
        default:
            throw new Error(`Unknown field type: ${(field as any).type}`);
    }
};
