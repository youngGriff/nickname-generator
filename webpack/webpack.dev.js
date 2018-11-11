const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, {mode}) => {
  const devMode = mode !== 'production';
  const config = {
    entry: [
      './src/main.js',

    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, '../dist')
    },
    devtool: 'cheap-module-eval-source-map',
    module: {
      rules: [
        {
          test: /\.js?$/,
          exclude: [/(node_modules)/, /\.spec\.js$/],
          include: [
            path.resolve(__dirname, '../js')
          ],
          use: []
        },
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader', // translates CSS into CommonJS
              query: {
                // modules: true,
                camelCase: true,
                // localIdentName: '[name]__[local]___[hash:base64:5]'
              }
            },
            {
              loader: 'sass-loader' // compiles Sass to CSS
            }
          ]
        }
      ]
    },
    plugins: [
      new ServiceWorkerWebpackPlugin({
        entry: path.join(__dirname, '../src/service-worker.js'),
      }),
      new HtmlWebpackPlugin({
        template: path.resolve('./index.html')
      }),
      new MiniCssExtractPlugin({
        filename: 'styles.css'
      })
    ],
    devServer: {
      contentBase: path.join(__dirname, '../'),
      compress: true,
      historyApiFallback: true
    }
  };

  return config;
};
