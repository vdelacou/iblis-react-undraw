const path = require('path');

module.exports = [
  {
    name: '@storybook/addon-docs/react/preset',
    options: {
      sourceLoaderOptions: null,
    },
  },
  {
    name: '@storybook/preset-typescript',
    options: {
      tsDocgenLoaderOptions: {
        tsconfigPath: path.resolve(__dirname, '../tsconfig.storybook.json'),
      },
      include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../stories')],
    },
  },
];
