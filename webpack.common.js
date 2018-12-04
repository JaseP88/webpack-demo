
module.exports = {
  entry: ['@babel/polyfill', './src/index.js',],
  module: {
    rules: [
      { test: /\.(jsx|js)$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, use: ['css-loader', 'style-loader'] }
    ]
  },
};