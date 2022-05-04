import { css } from '@emotion/css';
import React from 'react';
import { exampleForm } from './example-form';
import { SBCoreFieldAdapter } from './component-libraries/sb-core/FieldAdapter';
import { FieldLayoutGrid } from './forms/FieldLayoutGrid';
import { FieldLayoutSimple } from './forms/FieldLayoutSimple';
import { Form } from './forms/Form';
import { Select } from './component-libraries/sb-core/uikit/Select';

const layoutsMap = {
    simple: FieldLayoutSimple,
    grid: FieldLayoutGrid,
};

function App() {
    const [layout, setLayout] =
        React.useState<keyof typeof layoutsMap>('simple');

    return (
        <div
            className={css({
                maxWidth: 600,
                margin: '1rem auto',
                padding: '1rem',
                border: '1px solid #ccc',
                borderRadius: '0.5rem',
                backgroundColor: '#fafafa',
                fontFamily: "'Roboto', sans-serif",
            })}
        >
            <div
                className={css({
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1rem',
                })}
            >
                <h1>Form</h1>
                <div>
                    <label>
                        Layout:
                        <Select
                            value={layout}
                            onChange={(e) =>
                                setLayout(
                                    e.target.value as keyof typeof layoutsMap
                                )
                            }
                        >
                            {Object.keys(layoutsMap).map((key) => (
                                <option key={key} value={key}>
                                    {key}
                                </option>
                            ))}
                        </Select>
                    </label>
                </div>
            </div>

            <Form
                descriptor={exampleForm}
                fieldLayout={layoutsMap[layout]}
                fieldAdapter={SBCoreFieldAdapter}
            />
        </div>
    );
}

export default App;
