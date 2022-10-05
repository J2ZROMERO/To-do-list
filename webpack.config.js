const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer: {
        static: './dist',
    hot:false,  
    },
        optimization: {
        runtimeChunk: 'single',
      },
  mode: "development",
    entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins:[
new HtmlWebpackPlugin({
    title : "output managment",
    template: 'src/index.html'
})
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};