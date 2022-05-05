import { FieldComponentResolver } from '../../forms/types';
import { fieldComponentResolver as sbCoreFieldResolver } from '../sb-core/fieldResolver';
import { EPCField } from './fields/EPCField';
import { InspectionReportField } from './fields/InspectionReportField';
import { SBPropertyFieldDescriptor } from './types';

const fieldComponentMap = {
    epc: EPCField,
    'inspection-report': InspectionReportField,
} as const;

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBPropertyFieldDescriptor
> = (field) => {
    if (field.type === 'epc' || field.type === 'inspection-report') {
        return fieldComponentMap[field.type];
    }
    return sbCoreFieldResolver(field);
};
