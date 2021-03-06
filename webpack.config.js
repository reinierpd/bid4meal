const path = require("path");

const BUILD_DIR = path.resolve(__dirname, "dist");
const APP_DIR = path.resolve(__dirname, "src");
const NODE_MODULES_DIR = path.resolve(__dirname, 'node_modules');
const config = {
  entry: {
    bundle: `${APP_DIR}/index.jsx`
  },
  devtool: "source-map",
  output: {
    path: BUILD_DIR,
    filename: "[name].js"
  },
  devServer: {
    host: '0.0.0.0',
    historyApiFallback: true,
    contentBase: ".",
    port: 3000,
    open: true,
    hot: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        use: [
          {
            loader: "babel-loader",
            options: {
              "presets": ["@babel/preset-env", "@babel/preset-react"],
              "plugins": [
                "@babel/plugin-proposal-class-properties",
                "babel-plugin-dynamic-import-node"

              ]
            },
          },
          {
            loader: "eslint-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(css)$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      // font-awesome font loading inspired by https://gist.github.com/Turbo87/e8e941e68308d3b40ef6
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "url-loader?limit=10000&mimetype=application/font-woff",
            options: {
              name: "fonts/[hash].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "fonts/[hash].[ext]"
            }
          }
        ]
      }
    ]
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendor",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    modules: [
      NODE_MODULES_DIR,
      APP_DIR
    ]
  }
};

module.exports = config;
