const path = require('path')
module.exports = {
  mode: 'development',
  //mode: 'production',
  entry: {
    index: './tests/init.js',
  },
  target: 'web',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  }
}