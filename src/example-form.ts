import { FormDescriptor } from './forms/types';

export const exampleForm: FormDescriptor = {
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
            name: 'income',
            label: 'Income',
            type: 'price',
            min: 0,
            max: 1e6,
            currency: 'USD',
            prefix: '$',
            suffix: '/year',
        },
    ],
};
