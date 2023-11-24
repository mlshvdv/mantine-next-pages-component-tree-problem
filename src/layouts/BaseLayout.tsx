import * as React from 'react';
import Head from 'next/head';
import { Box, useMantineTheme } from '@mantine/core';
import classes from './BaseLayout.module.scss';

export default function BaseLayout({ children }: any) {
    const theme = useMantineTheme();

    return (
        <>
            <Head>
                <meta name="theme-color" content={theme.primaryColor} />
                <meta name="msapplication-TileColor" content={theme.primaryColor} />
                <link
                  rel="mask-icon"
                  href="/safari-pinned-tab.svg?v=20230401"
                  color={theme.primaryColor}
                />
            </Head>
            <Box className={classes.root}>
                { children }
            </Box>
        </>
    );
}
