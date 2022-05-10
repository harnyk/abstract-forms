export interface FieldDescriptorBase {
    name: string;
    label: string;
    suffix?: string;
    prefix?: string;
}

export interface FormDescriptor<FD extends FieldDescriptorBase> {
    fields: FD[];
}

//-----------------------------------------------------------------------------

export type FieldComponentProps<FD extends FieldDescriptorBase, V> = {
    field: FD;
    value?: V;
    onChange: (value: V) => void;
    layout: FieldLayoutComponent;
};

export type FieldComponent<FD extends FieldDescriptorBase, V> = React.FC<
    FieldComponentProps<FD, V>
>;

export type FieldComponentResolver<FD extends FieldDescriptorBase> = (
    field: FD
) => FieldComponent<FD, any>;

export type FieldLayoutProps = {
    field: FieldDescriptorBase;
    input: React.ReactNode;
    label: React.ReactNode;
    help?: React.ReactNode;
    error?: React.ReactNode;
};

export type FieldLayoutComponent = React.FC<FieldLayoutProps>;
