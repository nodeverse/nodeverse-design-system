const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  entry: "./src/index.js",
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    library: "",
    libraryTarget: "commonjs",
  },
  // plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      {
        test: /\.woff2/,
        type: "javascript/auto",
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        dependency: { not: ["url"] },
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
};
