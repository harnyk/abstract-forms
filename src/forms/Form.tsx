import { memo, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
    FieldComponentResolver,
    FieldDescriptorBase,
    FieldLayoutComponent,
    FormDescriptor,
} from './types';

export interface FormProps<FD extends FieldDescriptorBase> {
    descriptor: FormDescriptor<FD>;
    fieldResolver: FieldComponentResolver<FD>;
    fieldLayout: FieldLayoutComponent;
    onChange?: (data: any) => void;
}

const Form_ = <FD extends FieldDescriptorBase>({
    descriptor,
    fieldLayout,
    fieldResolver,
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
            {descriptor.fields.map((field) => {
                const FieldComponent = fieldResolver(field);
                return (
                    <Controller
                        key={field.name}
                        name={field.name}
                        control={control}
                        render={({ field: { ref: _, ...fieldProps } }) => (
                            <FieldComponent
                                {...fieldProps}
                                layout={fieldLayout}
                                field={field}
                            />
                        )}
                    />
                );
            })}
        </form>
    );
};

export const Form = memo(Form_) as typeof Form_;
