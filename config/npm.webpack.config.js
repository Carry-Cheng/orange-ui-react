const path = require('path')
const Webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ENV = require('../utils/path.ts')
module.exports = {
  mode: 'production', // "production" | "development" | "none"
  entry: './packages/Index.ts',
  output: {
    filename: 'index.js',
    path: ENV.NPM_OUTPUT_LIB
  },
  resolve: {
      extensions: [ '.tsx', '.ts', '.js', '.json' ]
  },
  module: {
    strictExportPresence: true,
    rules: [
      // Disable require.ensure as it's not a standard language feature.
      { parser: { requireEnsure: false } },
      
      // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
      {
          test: /\.tsx?$/,
          use: 'awesome-typescript-loader',
          exclude: /node_modules/
      },

      // Opt-in support for SASS (using .scss or .sass extensions).
      {
          test: /\.(scss|sass)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          exclude: /node_modules/
      },
      {
          test: /\.(jpg|png|svg)?$/,
          use: 'file-loader',
          exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      './packages/Index.d.ts'
    ])
  ]
}