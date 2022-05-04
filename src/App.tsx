import { css } from '@emotion/css';
import React from 'react';
import { FieldLayoutGrid } from './forms/FieldLayoutGrid';
import { FieldLayoutSimple } from './forms/FieldLayoutSimple';
import { Form } from './forms/Form';
import { FormDescriptor } from './forms/types';

const descriptor: FormDescriptor = {
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
        },
        {
            name: 'income',
            label: 'Income',
            type: 'price',
            currency: 'USD',
        },
    ],
};

const layoutsMap = {
    simple: FieldLayoutSimple,
    grid: FieldLayoutGrid,
};

function App() {
    const [layout, setLayout] =
        React.useState<keyof typeof layoutsMap>('simple');

    return (
        <div
            className={css`
                max-width: 600px;
                margin: 1rem auto;
                padding: 1rem;
                border: 1px solid #ccc;
                border-radius: 0.5rem;
                background-color: #fafafa;
                font-family: 'Roboto', sans-serif;
            `}
        >
            <div
                className={css`
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1rem;
                `}
            >
                <h1>Form</h1>
                <div>
                    <label>
                        Layout:
                        <select

                            value={layout}
                            onChange={(e) => setLayout(e.target.value as keyof typeof layoutsMap)}
                        >
                            {Object.keys(layoutsMap).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
            
            <Form descriptor={descriptor} fieldLayout={layoutsMap[layout]} />
        </div>
    );
}

export default App;
