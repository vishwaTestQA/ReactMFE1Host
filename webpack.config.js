const HtmlWebpackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require("webpack").container;
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const CopyPlugin = require("copy-webpack-plugin");
// import HtmlWebpackPlugin from "html-webpack-plugin"
// import ModuleFederationPlugin from "webpack"
// import { Configuration } from "webpack";
const path = require("path");
const isProd = process.env.NODE_ENV === "production";


module.exports = {           //npm install -D @types/node  to resolve conflicts in module and require
  // mode:  process.env.NODE_ENV || "development",
  mode:  isProd ? "production" : "development",

  // entry: "./src/index.ts",
  entry: path.resolve(__dirname, "src", "index.ts"),

  //newly added
  output:{
    path: path.resolve(__dirname, "dist"),
    // filename: "[name].bundle.js"
     filename: "[name].[contenthash].js",
      clean: true     //otherwise old files wont get removed
  },

  optimization: {
    usedExports: true,   // enables tree shaking
    minimize: true,      // enables minification
    splitChunks: {
      chunks: "all"      // vendor bundle splitting
    }
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,   //incase of any page not exist while react routing , then instead of showing 404, it redirects index.html
    static: {
    directory: path.join(__dirname, "public")
  },
  client:{
    overlay:true   //shows errors in browser
  },
    headers: {
    "Access-Control-Allow-Origin": "*"   //needed for MFE cross-origin loading
  },  //Otherwise host cannot load:
  open: true,
  hot: true,
  },


  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    exprContextCritical: false,
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
},
//use this if use babel-loaderReact Fast Refresh
                                  // Next.js style transforms
                                 // polyfills for old browsers
                                // advanced Babel plugins
   {
      test: /\.module\.css$/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : "style-loader",
        {
          loader: "css-loader",
          options: {
            // esModule: false,
            importLoaders:1,
            modules: {
              localIdentName: "[name]__[local]__[hash:base64:5]"
            }
          }
        },
        // "postcss-loader",
      ]
    },
    {
      test: /\.css$/,
      exclude: /\.module\.css$/,
      use: [
        isProd ? MiniCssExtractPlugin.loader : "style-loader",
        "css-loader",
        // "postcss-loader",
      ]
    },
    {
  test: /\.(png|jpg|jpeg|gif|svg)$/i,
  type: "asset/resource"
},
   {
        test: /\.(mp3|wav|ogg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/audio/[name][hash][ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/video/[name][hash][ext]"
        }
      }
    ]
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "host",

      remotes: {
        products: "products@http://localhost:3001/remoteEntry.js"
      },

      shared: {
        react: { singleton: true, eager: true },
        "react-dom": { singleton: true, eager: true }
      }
    }),

    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    //  new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash].css",
    //   chunkFilename: "[id].[contenthash].css"
    // })
      ...(isProd
      ? [
          new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css"
          })
        ]
      : []),

      new CopyPlugin({
    patterns: [
      { from: "public", 
           globOptions: {
        ignore: ["**/index.html"] // 🚀 ignore index.html
      }
    }
    //previously had only this but it throws error as it tries copy index.html again as we alredy doing that in above plugin HTMLWebPackPlugin
        // { from: "public", to: "" } // if "dist" gives here then under dist another dist folder will be created under that assets will be copied
    ]
  })
  ]
};