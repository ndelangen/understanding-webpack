const path = require('path');
const BabiliPlugin = require('babili-webpack-plugin');

module.exports = {
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/static/'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.css/,
        exclude: /node_modules/,
        loader: 'css-loader/locals',
        query: {
          modules: true
        }
      },
      {
        test: /\.md/,
        exclude: /node_modules/,
        use: ['html-loader', 'markdown-loader']
      },
      { test: /\.svg/, exclude: /node_modules/, loader: 'svg-loader' },
      { test: /\.zip$/, exclude: /node_modules/, loader: 'file-loader' },
      { test: /\.(gif|png|jpe?g)$/, exclude: /node_modules/, loader: 'url-loader' }
    ]
  }
  // plugins: [
  //   new BabiliPlugin({
  //     deadcode: true,
  //     mangle: true
  //   })
  // ]
};
