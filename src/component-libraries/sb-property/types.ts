import { FieldDescriptorBase } from '../../forms/types';
import { SBCoreFieldDescriptor } from '../sb-core/types';

export interface FieldDescriptorEPC extends FieldDescriptorBase {
    type: 'epc';
}


export type SBPropertyFieldDescriptor =
    | SBCoreFieldDescriptor
    | FieldDescriptorEPC;
