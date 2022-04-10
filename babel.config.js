module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: [
            { '@shared-components': './src/shared/components' },
            { '@shared-models': './src/shared/models' },
            { '@shared': './src/shared' },
            { '@services': './src/services' },
            { '@domains': './src/domains' },
            { '@api': './src/services/api/index' },
            { '@fonts': './src/shared/styles/theme/fonts' },
            { '@theme': './src/shared/theme' },
            { '@models': './src/services/models' },
            { '@utils': './src/shared/utils' },
            { '@assets': './src/assets/' },
            { '@colors': './src/shared/styles/theme/colors' },
          ],
        },
      ],
      ['@babel/plugin-proposal-class-properties', { loose: false }],
    ],
  }
}
