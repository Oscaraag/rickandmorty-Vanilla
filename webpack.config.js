const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    port: 9001,
    liveReload: true,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/styles/style.css',
          to: './style.css',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './public/index.html',
      filename: './index.html',
    }),
  ],
}
