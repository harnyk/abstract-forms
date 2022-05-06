import { FC, memo, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    FieldAdapterComponent,
    FieldDescriptorBase,
    FieldLayoutComponent,
    FormDescriptor,
} from './types';

export interface FormProps<FD extends FieldDescriptorBase> {
    descriptor: FormDescriptor<FD>;
    fieldAdapter: FieldAdapterComponent<FD>;
    fieldLayout: FieldLayoutComponent;
    onChange?: (data: any) => void;
}

const Form_ = <FD extends FieldDescriptorBase>({
    descriptor,
    fieldLayout,
    fieldAdapter: FieldAdapter,
    onChange,
}: FormProps<FD>) => {
    const { control, watch } = useForm();

    const watchAll = watch();
    useEffect(() => {
        if (onChange) {
            onChange(watchAll);
        }
    }, [watchAll, onChange]);

    return (
        <form>
            {descriptor.fields.map((field) => (
                <Controller
                    key={field.name}
                    name={field.name}
                    control={control}
                    render={({ field: { ref: _, ...fieldProps } }) => (
                        <FieldAdapter
                            {...fieldProps}
                            layout={fieldLayout}
                            field={field}
                        />
                    )}
                />
            ))}
        </form>
    );
};

export const Form = memo(Form_) as typeof Form_;
