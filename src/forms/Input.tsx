import { css } from '@emotion/css';
import styled from '@emotion/styled';
import React, { FC } from 'react';

interface InputBaseAdditionalProps {
    hasSuffix?: boolean;
    hasPrefix?: boolean;
}

const BORDER_RADIUS = 2;

export const InputBase = styled('input')<InputBaseAdditionalProps>(
    {
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: BORDER_RADIUS,
        backgroundColor: '#fff',
        ':focus': {
            outline: 'none',
        },
    },
    ({ hasPrefix, hasSuffix }) => ({
        borderTopRightRadius: hasSuffix ? 0 : BORDER_RADIUS,
        borderBottomRightRadius: hasSuffix ? 0 : BORDER_RADIUS,

        borderTopLeftRadius: hasPrefix ? 0 : BORDER_RADIUS,
        borderBottomLeftRadius: hasPrefix ? 0 : BORDER_RADIUS,
    })
);

type InputProps = React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
> & {
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
};

export const Input: FC<InputProps> = ({
    className,
    suffix,
    prefix,
    ...rest
}) => {
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix;

    return (
        <div className={css({ display: 'flex', width: '100%' })}>
            {hasPrefix ? (
                <div
                    className={css({
                        backgroundColor: '#fafafa',
                        border: '1px solid #ccc',
                        padding: '0.5rem',
                        borderRight: 'none',
                        borderTopLeftRadius: BORDER_RADIUS,
                        borderBottomLeftRadius: BORDER_RADIUS,
                        whiteSpace: 'nowrap',
                    })}
                >
                    {prefix}
                </div>
            ) : null}
            <InputBase {...rest} hasSuffix={hasSuffix} hasPrefix={hasPrefix} />
            {hasSuffix ? (
                <div
                    className={css({
                        backgroundColor: '#fafafa',
                        border: '1px solid #ccc',
                        padding: '0.5rem',
                        borderLeft: 'none',
                        borderTopRightRadius: BORDER_RADIUS,
                        borderBottomRightRadius: BORDER_RADIUS,
                        whiteSpace: 'nowrap',
                    })}
                >
                    {suffix}
                </div>
            ) : null}
        </div>
    );
};
