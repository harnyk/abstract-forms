import { FieldComponentResolver } from '../../forms/types';
import { fieldComponentResolver as sbCoreFieldResolver } from '../sb-core/fieldResolver';
import { EPCField } from './fields/EPCField';
import { InspectionReportField } from './fields/InspectionReportField';
import { TernaryField } from './fields/TernaryField';
import { SBPropertyFieldDescriptor } from './types';

//@ts-ignore
export const fieldComponentResolver: FieldComponentResolver<
    SBPropertyFieldDescriptor
> = (field) => {
    switch (field.type) {
        case 'epc':
            return EPCField;
        case 'inspection-report':
            return InspectionReportField;
        case 'ternary':
            return TernaryField;
        default:
            return sbCoreFieldResolver(field);
    }
};
