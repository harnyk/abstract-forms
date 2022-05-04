import { css } from '@emotion/css';
import { FieldLayoutComponent } from './types';

export const FieldLayoutSimple: FieldLayoutComponent = ({
    input,
    label,
    error,
    help,
    field,
}) => {
    return (
        <div
            className={css`
                display: flex;
                flex-direction: column;
                margin-bottom: 1rem;
            `}
        >
            <div
                className={css`
                    font-weight: 500;
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
