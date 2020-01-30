const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'validator-forms.js',
    library: 'validatorForms',
    libraryTarget: 'commonjs2',
  },
  externals: {
    validator: 'validator',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [new BundleAnalyzerPlugin()],
  mode: 'production',
};
