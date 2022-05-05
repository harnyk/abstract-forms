import { Input } from '../../uikit/Input';
import { FieldComponent } from '../../../forms/types';
import { FieldDescriptorNumber } from '../types';
import { Checkbox } from '../../uikit/Checkbox';
import { DecoratedInput } from '../../uikit/DecoratedInput';

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
