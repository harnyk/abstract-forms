import { css } from '@emotion/css';
import { FieldLayoutComponent } from './types/core';

export const FieldLayoutSimple: FieldLayoutComponent = ({
    input,
    label,
    error,
    help,
    field,
}) => {
    return (
        <div
            className={css({
                display: 'flex',
                flexDirection: 'column',
                marginBottom: '1rem',
            })}
        >
            <div className={css({ fontWeight: 500 })}>
                <label htmlFor={field.name}>{label}</label>
            </div>
            <div className={css({ display: 'flex' })}>{input}</div>
        </div>
    );
};
