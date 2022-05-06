import { css } from '@emotion/css';
import { forwardRef } from 'react';
import { DecoratedInputProps } from './DecoratedInput';
import { useTheme } from './ThemeProvider';

type CheckboxProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    Omit<DecoratedInputProps, 'renderInput'> & {
        label?: string;
    };

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
    ({ ...props }, ref) => {
        const theme = useTheme();

        const inputClass = css({
            margin: '0.5rem 0',
            ':focus': {
                outline: 'none',
            },
        });

        const labelClass = css({
            margin: '0.5rem 0',
            color: theme.colors.text,
            display: 'flex',
            alignItems: 'center',
            gap: '0.25rem',
        });

        if (props.label) {
            return (
                <label className={labelClass}>
                    <input {...props} type="checkbox" ref={ref} />
                    {props.label}
                </label>
            );
        }
        return (
            <input
                type="checkbox"
                {...props}
                className={inputClass}
                ref={ref}
            />
        );
    }
);
