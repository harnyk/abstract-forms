import { useState } from 'react';
import { FieldAdapter } from './FieldAdapter';
import { FieldLayoutComponent, FormDescriptor } from './types';

export interface FormProps {
    descriptor: FormDescriptor;
    fieldLayout: FieldLayoutComponent;
}

export const Form = (props: FormProps) => {
    const { descriptor, fieldLayout } = props;
    const [formState, setFormState] = useState<Record<string, string>>({});

    const handleChange = (name: string) => (value: any) => {
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    return (
        <form>
            {descriptor.fields.map((field) => (
                <FieldAdapter
                    field={field}
                    layout={fieldLayout}
                    onChange={handleChange(field.name)}
                    value={formState[field.name]}
                />
            ))}
        </form>
    );
};
