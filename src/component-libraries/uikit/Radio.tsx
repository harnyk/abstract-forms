import { css } from '@emotion/css';
import { forwardRef } from 'react';
import { DecoratedInputProps } from './DecoratedInput';
import { useTheme } from './ThemeProvider';

type RadioProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    Omit<DecoratedInputProps, 'renderInput'> & {
        label?: string;
    };

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
                    <input {...props} type="radio" ref={ref} />
                    {props.label}
                </label>
            );
        }
        return (
            <input type="radio" {...props} className={inputClass} ref={ref} />
        );
    }
);
