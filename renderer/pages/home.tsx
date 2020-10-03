import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Heading } from 'rebass';

export default function Home() {
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
