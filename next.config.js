module.exports = {
    future: {
        webpack5: true,
    },
    target: 'serverless',
    webpack: function (config) {
        config.module.rules.push({
            test: /\.md$/,
            use: 'raw-loader',
        })
        return config
    },
    i18n: {
        locales: ['en', 'bn'],
        defaultLocale: 'en',
    },
}