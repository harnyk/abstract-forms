import { FC } from 'react';
import { DecoratedInput, DecoratedInputProps } from './DecoratedInput';

type SelectProps = React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
> &
    Omit<DecoratedInputProps, 'renderInput'>;

export const Select: FC<SelectProps> = ({ ...props }) => {
    return (
        <DecoratedInput
            {...props}
            renderInput={({ className }) => (
                <select className={className} {...props} />
            )}
        />
    );
};
