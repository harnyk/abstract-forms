import { createContext, FC, ReactNode, useContext } from 'react';

export interface Theme {
    colors: {
        panelBackground: string;
        pageBackground: string;
        border: string;
        primary: string;
        secondary: string;
        text: string;
    };
    fontFamily: string;
    fontSize: number;
    borderRadius: number;
}

const defaultTheme: Theme = {
    colors: {
        panelBackground: '#fafafa',
        pageBackground: '#fff',
        border: '#ccc',
        primary: '#0070f3',
        secondary: '#f50057',
        text: '#000',
    },
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    borderRadius: 2,
};

export const ThemeContext = createContext<Theme>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: FC<{ theme: Theme; children?: ReactNode }> = ({
    children,
    theme,
}) => {
    return (
        <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
    );
};
