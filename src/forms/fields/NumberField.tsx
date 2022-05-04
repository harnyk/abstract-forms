import { Input } from '../Input';
import { FieldComponent, FieldDescriptorNumber } from '../types';

export const NumberField: FieldComponent<FieldDescriptorNumber> = ({
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
                />
            }
            label={field.label}
        />
    );
};
