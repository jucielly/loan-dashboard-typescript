import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

interface ThemeProps {
  children: ReactNode;
}

const theme = {
  colors: {
    primary: '#A71680',
    secondary: '#333',
    defaultWhite: '#ffff',
    success: '#659B5E',
    danger: '#E33D2F',
  },
  fonts: {
    default: 'Catamaran, sans-serif',
    fontSizes: {
      small: '1em',
      mediumSmall: '1.2em',
      medium: '2em',
      large: '3em',
    },
  },
};

const Theme: React.FC<ThemeProps> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
