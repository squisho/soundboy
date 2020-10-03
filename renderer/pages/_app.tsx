import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import type { AppProps } from 'next/app';

import IpcService, { IpcContext } from '../services/IpcService';
import theme from '../theme';

const Main = styled.main`
    font-family: 'system-ui', sans-serif;
`;

export default function MyApp({ Component, pageProps }: AppProps) {
    const [ipcService, setIpcService] = useState<IpcService | undefined>(undefined);

    // create the global ipcService object on mount, save in state, and pass to context
    useEffect(() => {
        if (!ipcService) setIpcService(new IpcService());
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <IpcContext.Provider value={ipcService}>
                <Main>
                    <Component {...pageProps} />
                </Main>
            </IpcContext.Provider>
        </ThemeProvider>
    );
}
