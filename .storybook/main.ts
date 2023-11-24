import type { StorybookConfig } from '@storybook/nextjs';

const config: StorybookConfig = {
    stories:      [
        '../src/components/**/*.(stories|story).@(js|jsx|ts|tsx)'
    ],
    addons:       [
        '@storybook/addon-essentials',
        'storybook-dark-mode',
        '@storybook/addon-styling'
    ],
    framework:    {
        name:    '@storybook/nextjs',
        options: {},
    },
    webpackFinal: (config) => {
        config.module       = config.module || {};
        config.module.rules = config.module.rules || [];
        
        // This modifies the existing image rule to exclude .svg files
        // since you want to handle those files with @svgr/webpack
        // @ts-ignore
        const imageRule = config.module.rules.find((rule) => rule?.['test']?.test('.svg'));
        if (imageRule) {
            // @ts-ignore
            imageRule['exclude'] = /\.svg$/;
        }
        
        // Configure .svg files to be loaded with @svgr/webpack
        config.module.rules.push({
            test: /\.svg$/,
            use:  ['@svgr/webpack'],
        });
        
        return config;
    },
};

export default config;
