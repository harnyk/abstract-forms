import { NumberField } from './fields/NumberField';
import { PriceField } from './fields/PriceField';
import { TextField } from './fields/TextField';
import {
    FieldAdapterComponent,
    FieldComponentMap,
    FieldComponentResolver,
} from './types';

const fieldComponentMap: FieldComponentMap = {
    text: TextField,
    number: NumberField,
    price: PriceField,
};

//@ts-ignore
const fieldComponentResolver: FieldComponentResolver = (field) => {
    return fieldComponentMap[field.type];
};

export const FieldAdapter: FieldAdapterComponent = ({
    field,
    value,
    onChange,
    layout,
}) => {
    const FieldComponent = fieldComponentResolver(field);
    return (
        <FieldComponent
            field={field}
            value={value}
            onChange={onChange}
            layout={layout}
        />
    );
};
