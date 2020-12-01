const path = require('path');

module.exports = {
  entry: './test/canary.test.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'test.js'
  },
  mode: 'none'
};