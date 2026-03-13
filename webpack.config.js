const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
// import HtmlWebpackPlugin from "html-webpack-plugin"
// import ModuleFederationPlugin from "webpack"
// import { Configuration } from "webpack";
// const path = require("path");


module.exports = {           //npm install -D @types/node  to resolve conflicts in module and require
  mode: "development",

  entry: "./src/index.ts",

  devServer: {
    port: 3000,
    historyApiFallback: true
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      // {
      //   test: /\.(ts|tsx)$/,
      //   loader: "ts-loader",
      //   exclude: /node_modules/
      // }
  {
  test: /\.(ts|tsx)$/,
  use: "babel-loader",
  exclude: /node_modules/
}
//use this if use babel-loaderReact Fast Refresh
                                  // Next.js style transforms
                                 // polyfills for old browsers
                                // advanced Babel plugins
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",

      remotes: {
        // products: "products@http://localhost:3001/remoteEntry.js"
      },

      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true }
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    })
  ]
};