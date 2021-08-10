const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line no-unused-vars
const { webpack, ProvidePlugin } = require("webpack");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
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
        type: "asset/inline",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
    new ProvidePlugin({
      React: "react",
    }),
    new ESLintWebpackPlugin({
      extensions: ["js", "jsx"],
    }),
  ],
};
