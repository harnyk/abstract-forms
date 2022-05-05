import { FieldDescriptorBase } from '../../forms/types';

export interface FieldDescriptorText extends FieldDescriptorBase {
    type: 'text';
}

export interface FieldDescriptorFlag extends FieldDescriptorBase {
    type: 'flag';
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

export interface FieldDescriptorChoice extends FieldDescriptorBase {
    type: 'choice';
    items: ChoiceOption[];
    variant?: 'select' | 'group' | 'auto';
}

export type SBCoreFieldDescriptor =
    | FieldDescriptorText
    | FieldDescriptorNumber
    | FieldDescriptorPrice
    | FieldDescriptorChoice
    | FieldDescriptorFlag;

export interface PriceValue {
    amount: number;
    currency: string;
}

interface ChoiceOption {
    label: string;
    value: string;
}
