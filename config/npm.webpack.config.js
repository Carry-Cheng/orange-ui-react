const path = require('path')
const Webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ENV = require('../utils/path.ts')
module.exports = {
  mode: 'development', // "production" | "development" | "none"
  // entry: './packages/Index.ts',
  entry: {
    button: ['./packages/button'],
    navbar: ['./packages/navbar'],
    icon: ['./packages/icon'],
    refresh: ['./packages/refresh'],
  },
  output: {
    filename: '[name].js',
    path: ENV.NPM_OUTPUT_LIB,
    library: "OrangeUI",
    libraryTarget: "umd2",
    // auxiliaryComment: "Test Comment"
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
  // When importing a module whose path matches one of the following, just
  // assume a corresponding global variable exists and use that instead.
  // This is important because it allows us to avoid bundling all of our
  // dependencies, which allows browsers to cache those libraries between builds.
  externals: {
    "react": "react",
    "react-dom": "ReactDOM",
    "react-router-dom": "react-router-dom"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      './packages/index.d.ts',
      './packages/index.js'
    ])
  ]
}