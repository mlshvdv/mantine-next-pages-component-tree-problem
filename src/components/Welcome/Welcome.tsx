import { ActionIcon, Anchor, Text, useDirection } from '@mantine/core';
import { IconTextDirectionLtr, IconTextDirectionRtl } from '@tabler/icons-react';
export function Welcome() {
    const { toggleDirection, dir } = useDirection();
    return (
        <>

            <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
                This starter Next.js project includes a minimal setup for server side rendering, if you want
                to learn more on Mantine + Next.js integration follow{ ' ' }
                <Anchor href="https://mantine.dev/guides/next/" size="lg">
                    this guide
                </Anchor>
                . To get started edit page.tsx file.
            </Text>

            <ActionIcon onClick={() => toggleDirection()} variant="default" radius="md" size="lg">
                { dir === 'rtl' ? (
                    <IconTextDirectionLtr stroke={1.5} />
                ) : (
                    <IconTextDirectionRtl stroke={1.5} />
                ) }
            </ActionIcon>
        </>
    );
}
