import { css } from '@emotion/css';
import { FieldLayoutComponent } from './types';

export const FieldLayoutGrid: FieldLayoutComponent = ({
    input,
    label,
    error,
    help,
    field,
}) => {
    return (
        <div
            className={css({
                display: 'grid',
                gridTemplateColumns: '2fr 3fr',
                marginBottom: '0.5rem',
            })}
        >
            <div
                className={css({
                    fontWeight: '500',
                    label: {
                        display: 'block',
                        padding: '0.5rem 0',
                    },
                })}
            >
                <label htmlFor={field.name}>{label}</label>
            </div>
            <div className={css({ display: 'flex' })}>{input}</div>
        </div>
    );
};
