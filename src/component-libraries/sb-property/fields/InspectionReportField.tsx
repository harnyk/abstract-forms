import { FieldComponent } from '../../../forms/types';
import { ChoiceField } from '../../sb-core/fields/ChoiceField';
import { FieldDescriptorInspectionReport, InspectionReport } from '../types';

export const InspectionReportField: FieldComponent<
    FieldDescriptorInspectionReport,
    InspectionReport
> = ({ field, onChange, ...props }) => {
    const choiceFieldDescriptor = {
        ...field,
        type: 'choice',
        items: InspectionReport,
    } as const;
    const choiceOnChange = (value: string) =>
        onChange(value as InspectionReport);

    return (
        <ChoiceField
            {...props}
            field={choiceFieldDescriptor}
            onChange={choiceOnChange}
        />
    );
};
