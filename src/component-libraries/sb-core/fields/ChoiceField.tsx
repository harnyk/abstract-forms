import { FieldComponent } from '../../../forms/types';
import { FieldDescriptorChoice } from '../types';
import { Select } from '../../uikit/Select';
import { Radio } from '../../uikit/Radio';

export const ChoiceField: FieldComponent<FieldDescriptorChoice, string> = ({
    field,
    value,
    onChange,
    layout: Layout,
}) => {
    const { variant = 'auto' } = field;

    const large = field.items.length > 5;
    let effectiveVariant: 'select' | 'group';
    if (variant === 'auto') {
        effectiveVariant = large ? 'select' : 'group';
    } else {
        effectiveVariant = variant;
    }

    if (effectiveVariant === 'group') {
        return (
            <Layout
                field={field}
                label={field.label}
                input={field.items.map((choice) => (
                    <Radio
                        key={choice.value}
                        value={choice.value}
                        label={choice.label}
                        checked={value === choice.value}
                        onChange={(e) => onChange(e.target.value)}
                        name={field.name}
                    />
                ))}
            />
        );
    } else {
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
    }
};
