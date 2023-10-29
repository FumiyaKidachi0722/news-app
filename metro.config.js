/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      components: path.resolve(__dirname, 'src/components'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      screens: path.resolve(__dirname, 'src/screens'),
      navigation: path.resolve(__dirname, 'src/navigation'),
      services: path.resolve(__dirname, 'src/services'),
      types: path.resolve(__dirname, 'src/types'),
      state: path.resolve(__dirname, 'src/state'),
      store: path.resolve(__dirname, 'src/store'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
};
