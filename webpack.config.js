const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',  // Transpile ES6+ to ES5
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],  // Handle .js files
  },
  // Polyfills for old browsers (e.g., IE11 lacks Array.from and full Promise support)
  plugins: [],  // Add polyfill plugin if needed, but core-js handles via Babel
};