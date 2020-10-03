import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Heading } from 'rebass';

import useIpcService from '../hooks/useIpcService';

export default function Home() {
    const ipcService = useIpcService();

    const analyze = async () => {
        if (!ipcService) return;
        console.log('analyze');
        const res = await ipcService.analyze(['./soundfile.wav']);
        console.log(res);
    };

    const getSounds = async () => {
        if (!ipcService) return;
        console.log('getSounds');
        const sounds = await ipcService.getSounds({ foo: 'bar' });
        console.log(sounds);
    };

    return (
        <>
            <Head>
                <title>Soundboy</title>
            </Head>
            <div>
                <Heading fontSize={[6, 7, 8]} color='primary' fontWeight='800'>
                    Soundboy
                </Heading>
                <p>
                    ⚡ Electron + Next.js ⚡ -
                    <Link href='/next'>
                        <a>Go to next page</a>
                    </Link>
                </p>
                <Button variant='primary' mr={2} onClick={analyze}>
                    Analyze
                </Button>
                <Button variant='primary' mr={2} onClick={getSounds}>
                    Get Sounds
                </Button>
                <img src='/images/logo.png' />
            </div>
        </>
    );
}
