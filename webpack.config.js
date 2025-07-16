// using common js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true, // cleans the unused bundle files
    // image assets support
    assetModuleFilename: "[name][ext]",
  },
  module: {
    rules: [
      {
        // any file having scss as extension then use then loaders a mentioned in the 'use' value
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      // rule for bebel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            targets: "defaults",
            presets: [["@babel/preset-env"]],
          },
        },
      },
      // rule for images based asset
      {
        test: /\.(png|jpeg|jpg|svg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
  // webpack will run the dev server to host the assets
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 2025,
    open: true, // will open the default browser by default
    hot: true, // hot module reloading
    compress: true,
    historyApiFallback: true,
  },

  devtool: "source-map", // for debugging purpose. create source map file for the bundle in dist folder
};
