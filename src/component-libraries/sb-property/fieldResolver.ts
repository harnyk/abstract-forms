import { FieldComponentResolver } from '../../forms/types';
import { fieldComponentResolver as sbCoreFieldResolver } from '../sb-core/fieldResolver';
import { EPCField } from './fields/EPCField';
import { SBPropertyFieldDescriptor } from './types';

const fieldComponentMap = {
    epc: EPCField,
} as const;

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBPropertyFieldDescriptor
> = (field) => {
    if (field.type === 'epc') {
        return fieldComponentMap[field.type];
    }
    return sbCoreFieldResolver(field);
};
