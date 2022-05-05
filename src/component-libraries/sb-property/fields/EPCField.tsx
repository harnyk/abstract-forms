import { FieldComponent } from '../../../forms/types';
import { ChoiceField } from '../../sb-core/fields/ChoiceField';
import { EPCValue, FieldDescriptorEPC } from '../types';

export const EPCField: FieldComponent<FieldDescriptorEPC, EPCValue> = ({
    field,
    onChange,
    ...props
}) => {
    const choiceFieldDescriptor = {
        ...field,
        type: 'choice',
        items: EPCValue,
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
