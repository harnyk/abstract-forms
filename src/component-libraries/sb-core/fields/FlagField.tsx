import { FieldComponent } from '../../../forms/types';
import { Checkbox } from '../../uikit/Checkbox';
import { FieldDescriptorNumber } from '../types';

export const FlagField: FieldComponent<FieldDescriptorNumber, boolean> = ({
    field,
    value,
    onChange,
    layout: Layout,
}) => {
    return (
        <Layout
            field={field}
            input={
                <Checkbox
                    checked={value}
                    name={field.name}
                    id={field.name}
                    onChange={(e) => onChange(e.target.checked)}
                />
            }
            label={field.label}
        />
    );
};
