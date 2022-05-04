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
            className={css`
                display: grid;
                grid-template-columns: 2fr 3fr;
                margin-bottom: 0.5rem;
            `}
        >
            <div
                className={css`
                    font-weight: 500;
                    label {
                        display: block;
                        padding: 0.5rem 0;
                    }
                `}
            >
                <label htmlFor={field.name}>{label}</label>
            </div>
            <div
                className={css`
                    display: flex;
                `}
            >
                {input}
            </div>
        </div>
    );
};
