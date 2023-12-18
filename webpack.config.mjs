import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: "main.js",
    path: path.resolve('./dist/')
  },
  module: {
    rules: [
      { test: /\.([cm]?ts|tsx)$/, loader: "ts-loader" },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Custom title",
    template: './public/index.html'
  })],
}
