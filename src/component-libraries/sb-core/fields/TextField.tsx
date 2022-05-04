import { Input } from '../uikit/Input';
import { FieldComponent } from '../../../forms/types/core';
import { FieldDescriptorText } from '../types';

export const TextField: FieldComponent<FieldDescriptorText, string> = ({
    field,
    value,
    onChange,
    layout: Layout,
}) => {
    return (
        <Layout
            field={field}
            label={field.label}
            input={
                <Input
                    type="text"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    name={field.name}
                    id={field.name}
                    suffix={field.suffix}
                    prefix={field.prefix}
                />
            }
        />
    );
};
