export interface FieldDescriptorBase {
    name: string;
    label: string;
    suffix?: string;
    prefix?: string;
}

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

export interface PriceValue {
    amount: number;
    currency: string;
}

export interface ValueByType {
    text: string;
    number: number;
    price: PriceValue;
}

export type FieldDescriptor =
    | FieldDescriptorText
    | FieldDescriptorNumber
    | FieldDescriptorPrice;

export interface FormDescriptor {
    fields: FieldDescriptor[];
}

//-----------------------------------------------------------------------------

export type FieldComponentProps<D extends FieldDescriptor> = {
    field: D;
    value?: ValueByType[D['type']];
    onChange: (value: ValueByType[D['type']]) => void;
    layout: FieldLayoutComponent;
};

export type FieldComponent<D extends FieldDescriptor> = React.FC<
    FieldComponentProps<D>
>;

export type FieldComponentMap = {
    text: FieldComponent<FieldDescriptorText>;
    number: FieldComponent<FieldDescriptorNumber>;
    price: FieldComponent<FieldDescriptorPrice>;
};

export type FieldComponentResolver = <D extends FieldDescriptor>(
    field: D
) => FieldComponent<D>;

export type FieldAdapterProps = {
    field: FieldDescriptor;
    value: ValueByType[FieldDescriptor['type']];
    layout: FieldLayoutComponent;
    onChange: (value: ValueByType[FieldDescriptor['type']]) => void;
};

export type FieldAdapterComponent = React.FC<FieldAdapterProps>;

export type FieldLayoutProps = {
    field: FieldDescriptor;
    input: React.ReactNode;
    label: React.ReactNode;
    help?: React.ReactNode;
    error?: React.ReactNode;
};

export type FieldLayoutComponent = React.FC<FieldLayoutProps>;
