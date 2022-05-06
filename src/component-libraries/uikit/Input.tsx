import { forwardRef } from 'react';
import { DecoratedInput, DecoratedInputProps } from './DecoratedInput';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    Omit<DecoratedInputProps, 'renderInput'>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ ...props }, ref) => {
        return (
            <DecoratedInput
                {...props}
                renderInput={({ className }) => (
                    <input className={className} {...props} ref={ref} />
                )}
            />
        );
    }
);
