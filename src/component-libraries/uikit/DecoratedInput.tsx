import { css } from '@emotion/css';
import React, { FC } from 'react';
import { useTheme } from './ThemeProvider';

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

    const theme = useTheme();

    const inputClass = css({
        width: '100%',
        padding: '0.5rem',
        border: `1px solid ${theme.colors.border}`,
        borderRadius: theme.borderRadius,
        backgroundColor: theme.colors.pageBackground,
        ':focus': {
            outline: 'none',
        },
        borderTopRightRadius: hasSuffix ? 0 : theme.borderRadius,
        borderBottomRightRadius: hasSuffix ? 0 : theme.borderRadius,
        borderTopLeftRadius: hasPrefix ? 0 : theme.borderRadius,
        borderBottomLeftRadius: hasPrefix ? 0 : theme.borderRadius,
    });

    const rootClass = css({ display: 'flex', width: '100%' });

    const prefixClass = css({
        backgroundColor: theme.colors.panelBackground,
        border: `1px solid ${theme.colors.border}`,
        padding: '0.5rem',
        borderRight: 'none',
        borderTopLeftRadius: theme.borderRadius,
        borderBottomLeftRadius: theme.borderRadius,
        whiteSpace: 'nowrap',
    });

    const suffixClass = css({
        backgroundColor: theme.colors.panelBackground,
        border: `1px solid ${theme.colors.border}`,
        padding: '0.5rem',
        borderLeft: 'none',
        borderTopRightRadius: theme.borderRadius,
        borderBottomRightRadius: theme.borderRadius,
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
