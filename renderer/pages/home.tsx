import React, { useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heading } from 'rebass';

import useIpcService from '../hooks/useIpcService';

export default function Home() {
    const ipcService = useIpcService();

    useEffect(() => {
        async function ping() {
            if (!ipcService) return;

            console.log('pinging');
            const res = await ipcService.send<string>('analyzer');
            console.log(res);
        }

        ping();
    }, [ipcService]);

    return (
        <>
            <Head>
                <title>Soundboy</title>
            </Head>
            <div>
                <Heading
                    fontSize={[ 6, 7, 8 ]}
                    color='primary'
                    fontWeight='800'
                >
                    Soundboy
                </Heading>
                <p>
                    ⚡ Electron + Next.js ⚡ -
                    <Link href='/next'>
                        <a>Go to next page</a>
                    </Link>
                </p>
                <img src='/images/logo.png' />
            </div>
        </>
    );
}
