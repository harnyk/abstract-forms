import { useState } from 'react';
import {
    FieldAdapterComponent,
    FieldDescriptorBase,
    FieldLayoutComponent,
    FormDescriptor,
} from './types/core';

export interface FormProps<FD extends FieldDescriptorBase> {
    descriptor: FormDescriptor<FD>;
    fieldAdapter: FieldAdapterComponent<FD>;
    fieldLayout: FieldLayoutComponent;
}

export const Form = <FD extends FieldDescriptorBase>(props: FormProps<FD>) => {
    const { descriptor, fieldLayout, fieldAdapter: FieldAdapter } = props;
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
