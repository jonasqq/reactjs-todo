const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    todo: './src/todo.js',
  },
  plugins: [
    new CleanWebpackPlugin(['public', 'views']),
    new HtmlWebpackPlugin({
      title: 'TODO List',
      template: '!!raw-loader!src/templates/todo.template.ejs',
      filename: '../../views/todo.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      },
    }),
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'public/scripts'),
    publicPath: './public/scripts',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    maxEntrypointSize: 5000000,
    maxAssetSize: 3000000,
  },
};

module.exports = (env, argv) => {
  switch (argv.mode) {
    case 'development':
      config.devtool = 'inline-source-map';
      return config;
    case 'production':
      config.devtool = 'source-map';
      return config;
    default:
      return config;
  }
};
