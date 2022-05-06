import { forwardRef } from 'react';
import { DecoratedInput, DecoratedInputProps } from './DecoratedInput';

type SelectProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
> &
    Omit<DecoratedInputProps, 'renderInput'>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
    ({ ...props }, ref) => {
        return (
            <DecoratedInput
                {...props}
                renderInput={({ className }) => (
                    <select className={className} {...props} ref={ref} />
                )}
            />
        );
    }
);
