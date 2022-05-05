import { FieldDescriptorBase } from '../../forms/types';
import { SBCoreFieldDescriptor } from '../sb-core/types';

export enum EPCValue {
    A = 'A',
    B = 'B',
    C = 'C',
    D = 'D',
    E = 'E',
    F = 'F',
    G = 'G',
}

export enum InspectionReport {
    Conform = 'conform',
    'Not Conform' = 'not_conform',
    'No Report' = 'no_report',
    'Not Applicable' = 'not_applicable',
}

export interface FieldDescriptorEPC extends FieldDescriptorBase {
    type: 'epc';
}

export interface FieldDescriptorInspectionReport extends FieldDescriptorBase {
    type: 'inspection-report';
}

export type SBPropertyFieldDescriptor =
    | SBCoreFieldDescriptor
    | FieldDescriptorEPC
    | FieldDescriptorInspectionReport;
