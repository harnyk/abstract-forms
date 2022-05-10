import { css } from '@emotion/css';
import React, { useCallback, useState } from 'react';
import { fieldComponentResolver } from './component-libraries/sb-property/fieldResolver';
import { useTheme } from './component-libraries/uikit/ThemeProvider';
import { exampleForm } from './example-form';
import { Form } from './forms/Form';
import { layoutsMap, LayoutSwitcher } from './LayoutSwitcher';

function App() {
    const [layout, setLayout] =
        React.useState<keyof typeof layoutsMap>('simple');
    const [formValues, setFormValues] = useState(null);

    const handleFormChange = useCallback((formValues: any) => {
        setFormValues(formValues);
        console.log('formValues', formValues);
    }, []);

    const theme = useTheme();

    return (
        <div
            className={css({
                maxWidth: 600,
                margin: '1rem auto',
                padding: '1rem',
                border: `1px solid ${theme.colors.border}`,
                borderRadius: '0.5rem',
                backgroundColor: theme.colors.panelBackground,
                fontFamily: theme.fontFamily,
                fontSize: theme.fontSize,
                color: theme.colors.text,
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
                    <LayoutSwitcher
                        layout={layout}
                        onChange={(layout) => setLayout(layout)}
                    />
                </div>
            </div>

            <Form
                descriptor={exampleForm}
                fieldLayout={layoutsMap[layout]}
                fieldResolver={fieldComponentResolver}
                onChange={handleFormChange}
            />

            <div
                className={css({
                    marginTop: '1rem',
                    borderTop: `1px dashed ${theme.colors.border}`,
                })}
            >
                <pre>{JSON.stringify(formValues, null, 2)}</pre>
            </div>
        </div>
    );
}

export default App;
