import { Input } from '../../../forms/Input';
import { FieldComponent } from '../../../forms/types/core';
import { FieldDescriptorNumber } from '../types';

export const NumberField: FieldComponent<FieldDescriptorNumber, number> = ({
    field,
    value,
    onChange,
    layout: Layout,
}) => {
    return (
        <Layout
            field={field}
            input={
                <Input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    name={field.name}
                    id={field.name}
                    min={field.min}
                    max={field.max}
                    suffix={field.suffix}
                    prefix={field.prefix}
                />
            }
            label={field.label}
        />
    );
};
