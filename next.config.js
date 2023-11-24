const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
    reactStrictMode: false,
    eslint:          {
        ignoreDuringBuilds: true,
    },
    experimental:    {
        optimizePackageImports: [
            '@mantine/core',
            '@mantine/hooks'
        ],
    },
    sassOptions:     {
        prependData: `@import "./src/assets/styles/_mantine.scss";`,
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            use:  ['@svgr/webpack'],
        })

        return config
    },
});
