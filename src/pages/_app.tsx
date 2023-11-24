import '@/assets/styles/global.css';
import '@mantine/core/styles.css';
import '@mantine/carousel/styles.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { DirectionProvider, MantineProvider } from '@mantine/core';
import { Router } from 'next/router';
import { ReactElement, ReactNode, useEffect } from 'react';
import { NextPage } from 'next';
import { theme } from '@/theme';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout?: (page: ReactElement) => ReactNode
};

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
   
    // Use the layout defined at the page level, if available
    const getLayout = Component.getLayout ?? ((page) => page);

    return (
        <DirectionProvider>
            <MantineProvider theme={theme}>
                <Head>
                    <title>mantine-next-pages-component-tree-problem</title>
                    <meta
                      name="viewport"
                      content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
                    />
                    <link rel="shortcut icon" href="/favicon.svg" />
                </Head>
                { getLayout(<Component {...pageProps} />) }
            </MantineProvider>
        </DirectionProvider>
    );
}
