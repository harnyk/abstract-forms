import { FieldComponent } from '../../../forms/types/core';
import { FieldDescriptorChoice } from '../types';
import { Select } from '../uikit/Select';

export const ChoiceField: FieldComponent<FieldDescriptorChoice, string> = ({
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
                <Select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    name={field.name}
                    id={field.name}
                >
                    {field.items.map((choice) => (
                        <option key={choice.value} value={choice.value}>
                            {choice.label}
                        </option>
                    ))}
                </Select>
            }
        />
    );
};
