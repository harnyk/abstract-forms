import { FC } from 'react';
import { DecoratedInput, DecoratedInputProps } from './DecoratedInput';

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> &
    Omit<DecoratedInputProps, 'renderInput'>;

export const Input: FC<InputProps> = ({ ...props }) => {
    return (
        <DecoratedInput
            {...props}
            renderInput={({ className }) => (
                <input className={className} {...props} />
            )}
        />
    );
};
