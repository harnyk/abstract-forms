import { Input } from '../../uikit/Input';
import { FieldComponent } from '../../../forms/types';
import { FieldDescriptorPrice } from '../types';

export const PriceField: FieldComponent<
    FieldDescriptorPrice,
    { amount: number; currency: string }
> = ({ field, value, onChange, layout: Layout }) => {
    const currency = value?.currency ?? field.currency;

    return (
        <Layout
            field={field}
            input={
                <Input
                    type="number"
                    value={value?.amount}
                    onChange={(e) =>
                        onChange({
                            amount: Number(e.target.value),
                            currency,
                        })
                    }
                    name={field.name}
                    id={field.name}
                    min={field.min}
                    max={field.max}
                    suffix={field.suffix}
                    prefix={field.prefix}
                />
            }
            label={`${field.label}`}
        />
    );
};
