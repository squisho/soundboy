import React from 'react';
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import type { AppProps } from 'next/app';

import theme from '../config/theme';

const Main = styled.main`
    font-family: 'system-ui', sans-serif;
`;

export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('theme', theme);

    return (
        <ThemeProvider theme={theme}>
            <Main>
                <Component {...pageProps} />
            </Main>
        </ThemeProvider>
    );
}
