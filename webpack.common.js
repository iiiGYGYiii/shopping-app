const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    path: path.join(__dirname, "build"),
  },
  module:{
    rules:[
      {
        test: /\.s?css$/i,
        use:[
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.jsx?$/i,
        use:{
          loader: "babel-loader",
          options:{
            presets:[
              "@babel/preset-env",
              "@babel/preset-react",
            ],
            compact: false,
          },
        },
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
    }),
  ],
};
