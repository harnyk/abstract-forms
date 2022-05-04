import { FieldDescriptorBase } from '../../forms/types/core';

export interface FieldDescriptorText extends FieldDescriptorBase {
    type: 'text';
}

export interface FieldDescriptorNumber extends FieldDescriptorBase {
    type: 'number';
    min?: number;
    max?: number;
}

export interface FieldDescriptorPrice extends FieldDescriptorBase {
    type: 'price';
    min?: number;
    max?: number;
    currency: string;
}

export type SBCoreFieldDescriptor =
    | FieldDescriptorText
    | FieldDescriptorNumber
    | FieldDescriptorPrice;

export interface PriceValue {
    amount: number;
    currency: string;
}
