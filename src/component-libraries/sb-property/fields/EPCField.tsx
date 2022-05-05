import { FieldComponent } from '../../../forms/types';
import { ChoiceField } from '../../sb-core/fields/ChoiceField';
import { FieldDescriptorEPC } from '../types';

export enum EPCValue {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
}

export const EPCField: FieldComponent<FieldDescriptorEPC, EPCValue> = ({
    field,
    onChange,
    ...props
}) => {
    const choiceFieldDescriptor = {
        ...field,
        type: 'choice',
        items: Object.entries(EPCValue).map(([key, value]) => ({
            label: value,
            value,
        })),
    } as const;
    const choiceOnChange = (value: string) => onChange(value as EPCValue);

    return (
        <ChoiceField
            {...props}
            field={choiceFieldDescriptor}
            onChange={choiceOnChange}
        />
    );
};
