const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-unused-vars
const { webpack, ProvidePlugin } = require("webpack");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
    filename: "./[name].js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: ["css-loader", "sass-loader"],
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            compact: false,
          },
        },
      },
      {
        test: /\.svg$/i,
        use: ["babel-loader", "react-svg-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      favicon: path.join(__dirname, "src", "favicon.ico"),
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new ESLintWebpackPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
