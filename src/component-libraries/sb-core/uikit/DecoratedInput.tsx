import { css } from '@emotion/css';
import React, { FC } from 'react';

const BORDER_RADIUS = 2;

export interface DecoratedInputProps {
    suffix?: React.ReactNode;
    prefix?: React.ReactNode;
    renderInput: (p: { className: string }) => JSX.Element;
}

export const DecoratedInput: FC<DecoratedInputProps> = ({
    suffix,
    prefix,
    renderInput,
}) => {
    const hasPrefix = !!prefix;
    const hasSuffix = !!suffix;

    const inputClass = css({
        width: '100%',
        padding: '0.5rem',
        border: '1px solid #ccc',
        borderRadius: BORDER_RADIUS,
        backgroundColor: '#fff',
        ':focus': {
            outline: 'none',
        },
        borderTopRightRadius: hasSuffix ? 0 : BORDER_RADIUS,
        borderBottomRightRadius: hasSuffix ? 0 : BORDER_RADIUS,
        borderTopLeftRadius: hasPrefix ? 0 : BORDER_RADIUS,
        borderBottomLeftRadius: hasPrefix ? 0 : BORDER_RADIUS,
    });

    const rootClass = css({ display: 'flex', width: '100%' });

    const prefixClass = css({
        backgroundColor: '#fafafa',
        border: '1px solid #ccc',
        padding: '0.5rem',
        borderRight: 'none',
        borderTopLeftRadius: BORDER_RADIUS,
        borderBottomLeftRadius: BORDER_RADIUS,
        whiteSpace: 'nowrap',
    });

    const suffixClass = css({
        backgroundColor: '#fafafa',
        border: '1px solid #ccc',
        padding: '0.5rem',
        borderLeft: 'none',
        borderTopRightRadius: BORDER_RADIUS,
        borderBottomRightRadius: BORDER_RADIUS,
        whiteSpace: 'nowrap',
    });

    return (
        <div className={rootClass}>
            {hasPrefix ? <div className={prefixClass}>{prefix}</div> : null}
            {renderInput({ className: inputClass })}
            {hasSuffix ? <div className={suffixClass}>{suffix}</div> : null}
        </div>
    );
};
