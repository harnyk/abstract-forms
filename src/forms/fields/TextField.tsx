import { Input } from '../Input';
import { FieldComponent, FieldDescriptorText } from '../types';

export const TextField: FieldComponent<FieldDescriptorText> = ({
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
                />
            }
        />
    );
};
