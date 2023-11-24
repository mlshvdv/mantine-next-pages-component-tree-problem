import * as React from 'react';
import { Box } from '@mantine/core';
import BaseLayout from '@/layouts/BaseLayout';
import classes from './DefaultLayout.module.scss';

export default function DefaultLayout({ children }: any) {
    return (
        <BaseLayout>
            <Box className={classes.root}>
                { children }
            </Box>
        </BaseLayout>
    );
}
