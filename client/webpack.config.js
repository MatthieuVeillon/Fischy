const webpack = require("webpack");

module.exports = {
  //  the src/index.js file as entry point to bundle it. If the src/index.js file imports other JavaScript files, bundle them as well.
  entry: "./src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader", "eslint-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  // The bundled source code files shall result in a bundle.js file in the /dist folder.
  output: {
    path: __dirname + "/dist",
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
  // The /dist folder will be used to serve our application to the browser.
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};
