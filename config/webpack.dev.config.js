const base = require('./base');

module.exports = Object.assign({}, base, {
  devtool: '#eval-source-map',
  devServer: {
    historyApiFallback: true,
    noInfo: true
  }
});
