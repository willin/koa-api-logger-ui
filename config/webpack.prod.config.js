const webpack = require('webpack');
const base = require('./base');

module.exports = Object.assign({}, base, {
  devtool: '#source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  plugins: (base.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
});
