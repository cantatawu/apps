var path = require('path')
var webpack = require('webpack'),
    fs = require('fs'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

let config = function (env) {

  let returner = {

    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './app/'),
      publicPath: '/app/',
      filename: '[hash].[name].js',
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
              // the "scss" and "sass" values for the lang attribute to the right configs here.
              // other preprocessors should work out of the box, no loader config like this necessary.
              'scss': 'vue-style-loader!css-loader!sass-loader',
              'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
            }
            // other vue-loader options go here
          }
        },
        {
          test: /\.s[ca]ss$/,
          loader: ['style-loader', 'css-loader?importLoaders=1','sass-loader']
        },
        {
          test: /\.css$/,
          loader: ['style-loader', 'css-loader']
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'file-loader',
          options: {
            name: 'fonts/[name].[ext]?[hash]'
          }
        },
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: /node_modules/
        },
        {
          test: /\.(png|jpg|gif|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'images/[name].[ext]?[hash]'
          }
        }
      ]
    },    
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify((env && typeof env != "undefined" && env.release) ? 'production' : 'development')
        }
      }),
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'index.html',
        inject: true,
        minify: {
          removeComments: true,
          removeScriptTypeAttributes: true,
          removeAttributeQuotes: true,
          useShortDoctype: true,
          decodeEntities: true,
          collapseWhitespace: true,
          minifyCSS: true
        }
      })
    ],
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      modules: [path.join(__dirname, 'src'), 'node_modules'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        'src': path.resolve(__dirname, 'src'),
        'api': path.resolve(__dirname, 'src/api'),
        'assets': path.resolve(__dirname, 'src/assets'),
        'pages': path.resolve(__dirname, 'src/pages'),
        'components': path.resolve(__dirname, 'src/components'),
      }
    },
    performance: {
      hints: false
    }
  }

  if (process.env.NODE_ENV === 'development') {
    returner.output.publicPath = '/';
    returner.devServer = {
      inline:true,
      port: 8080,
      stats: {
        colors: true
      },
      watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
      },
      quiet: false,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "X-Requested-With,Content-Type,Accept-Ranges",
        "Access-Control-Allow-Methods": "GET,HEAD,POST,PUT,DELETE,TRACE,OPTIONS,PATCH"
      },
      host: '127.0.0.1',
      proxy: [{
        context: [],
        target:"",
        changeOrigin: true
      }]
    }
  }

  return returner
}

module.exports = config