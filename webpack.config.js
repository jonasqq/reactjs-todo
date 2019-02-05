const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: {
    todo: './src/todo/todo.client.jsx',
  },
  plugins: [
    new CleanWebpackPlugin(['public', 'views']),
    new HtmlWebpackPlugin({
      title: 'TODO List',
      template: '!!raw-loader!src/todo/todo.template.ejs',
      filename: '../../views/todo.ejs',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
      },
    }),
  ],
  output: {
    path: `${__dirname}/public/scripts`,
    publicPath: '/public/scripts/',
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

module.exports = (env, argv = { mode: 'development' }) => {
  switch (argv.mode) {
    case 'development':
      config.output.filename = '[name].js';
      config.devtool = 'inline-source-map';
      return config;
    case 'production':
      config.mode = 'production';
      config.output.filename = '[name].[contenthash].js';
      config.devtool = 'source-map';
      return config;
    default:
      return config;
  }
};
