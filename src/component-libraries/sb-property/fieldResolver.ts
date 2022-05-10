import { FieldComponentResolver } from '../../forms/types';
import { fieldComponentResolver as sbCoreFieldResolver } from '../sb-core/fieldResolver';
import { EPCField } from './fields/EPCField';
import { InspectionReportField } from './fields/InspectionReportField';
import { TernaryField } from './fields/TernaryField';
import { SBPropertyFieldDescriptor } from './types';

const fieldComponentMap = {
    epc: EPCField,
    'inspection-report': InspectionReportField,
    ternary: TernaryField,
} as const;

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBPropertyFieldDescriptor
> = (field) => {
    if (
        field.type === 'epc' ||
        field.type === 'inspection-report' ||
        field.type === 'ternary'
    ) {
        return fieldComponentMap[field.type];
    }
    return sbCoreFieldResolver(field);
};
