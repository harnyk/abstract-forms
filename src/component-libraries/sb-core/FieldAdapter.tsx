import { FieldAdapterComponent } from '../../forms/types/core';
import { fieldComponentResolver } from './fieldResolver';
import { SBCoreFieldDescriptor } from './types';

export const SBCoreFieldAdapter: FieldAdapterComponent<
    SBCoreFieldDescriptor
> = ({ field, value, onChange, layout }) => {
    const FieldComponent = fieldComponentResolver(field);
    return (
        <FieldComponent
            field={field}
            value={value}
            onChange={onChange}
            layout={layout}
        />
    );
};
