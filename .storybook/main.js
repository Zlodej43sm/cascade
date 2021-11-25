const path = require('path')

module.exports = {
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials'
  ],
  babel: async options => ({
    ...options,
    plugins: [
      [
        '@babel/plugin-proposal-decorators',
        {
          'legacy': true
        }
      ],
      [
        '@babel/plugin-proposal-class-properties',
        {
          'loose': false
        },
        '@babel/plugin-proposal-class-properties-fix'
      ],
      [
        "@babel/plugin-proposal-private-property-in-object",
        {
          "loose": false
        }
      ],
      '@babel/plugin-proposal-private-methods',
    ],
  }),
  webpackFinal: async (config) => {
    // add SCSS support for CSS Modules
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?modules&importLoaders',
        {
          loader: "sass-loader",
          options: {
            sassOptions: {
              includePaths: ["node_modules", "src/styles"],
            },
          },
        },
      ],
      include: path.resolve(__dirname, '../'),
    });

    return config;
  },
}
