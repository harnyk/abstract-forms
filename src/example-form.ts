import { SBPropertyFieldDescriptor } from './component-libraries/sb-property/types';
import { FormDescriptor } from './forms/types';

export const exampleForm: FormDescriptor<SBPropertyFieldDescriptor> = {
    fields: [
        {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
        },
        {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
        },
        {
            name: 'age',
            label: 'Age',
            type: 'number',
            min: 18,
            max: 99,
            suffix: 'years',
        },
        {
            name: 'gender',
            label: 'Gender',
            type: 'choice',
            items: [
                {
                    label: 'Male',
                    value: 'm',
                },
                {
                    label: 'Female',
                    value: 'f',
                },
            ],
        },
        {
            name: 'income',
            label: 'Income',
            type: 'price',
            min: 0,
            max: 1e6,
            currency: 'USD',
            prefix: '$',
            suffix: '/year',
        },
        {
            name: 'epc',
            label: 'EPC',
            type: 'epc',
        },
        {
            name: 'isMarried',
            label: 'Is Married',
            type: 'flag',
        },
    ],
};
