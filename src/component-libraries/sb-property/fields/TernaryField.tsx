import { FieldComponent } from '../../../forms/types';
import { ChoiceField } from '../../sb-core/fields/ChoiceField';
import { FieldDescriptorTernary } from '../types';

type TernaryValue = boolean | null | undefined;
const ternaryChoices = [
    { label: 'Yes', value: true, str: 'true' },
    { label: 'No', value: false, str: 'false' },
    { label: 'Not Specified', value: null, str: 'null' },
] as const;

function valueToString(value: TernaryValue): string {
    return (
        ternaryChoices.find((choice) => choice.value === value)?.str ?? 'null'
    );
}

function stringToValue(str: string): TernaryValue {
    return ternaryChoices.find((choice) => choice.str === str)?.value ?? null;
}

export const TernaryField: FieldComponent<
    FieldDescriptorTernary,
    TernaryValue
> = ({ field, onChange, value, ...props }) => {
    const choiceFieldDescriptor = {
        ...field,
        type: 'choice',
        items: ternaryChoices.map((choice) => ({
            label: choice.label,
            value: choice.str,
        })),
    } as const;
    const choiceOnChange = (value: string) => onChange(stringToValue(value));

    return (
        <ChoiceField
            {...props}
            value={valueToString(value)}
            field={choiceFieldDescriptor}
            onChange={choiceOnChange}
        />
    );
};
