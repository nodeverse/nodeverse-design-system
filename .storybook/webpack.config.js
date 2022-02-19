/* eslint-disable no-param-reassign */
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = ({ config }) => {
  config.resolve.extensions = [".mjs", ".js", ".jsx", ".json"];
  config.module.rules.push({
    test: /\.woff2/,
    type: "javascript/auto",
  });
  //   config.plugins.push(
  //     new CopyWebpackPlugin({
  //       patterns: [
  //         {
  //           from: "src/assets/fonts",
  //           to: "fonts",
  //         },
  //       ],
  //     })
  //   );

  return config;
};
