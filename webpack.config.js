const HtmlWebpackPlugin = require('html-webpack-plugin')
const babelRules = [{
  test: /\.js$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    plugin: ['@babel/plugin-syntax-dynamic-import'],
    options: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  }
}]

module.exports = {
  output: {
    filename: 'app.bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    })
  ],
  module: {
    rules: babelRules
  }
}
