import { FieldAdapterComponent } from '../../forms/types';
import { fieldComponentResolver } from './fieldResolver';
import { SBPropertyFieldDescriptor } from './types';

export const SBPropertyFieldAdapter: FieldAdapterComponent<
    SBPropertyFieldDescriptor
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
