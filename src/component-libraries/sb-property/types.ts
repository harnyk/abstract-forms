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

export interface FieldDescriptorEPC extends FieldDescriptorBase {
    type: 'epc';
}

export type SBPropertyFieldDescriptor =
    | SBCoreFieldDescriptor
    | FieldDescriptorEPC;
