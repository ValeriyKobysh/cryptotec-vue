var path = require('path')
var webpack = require('webpack')
var PrerenderSpaPlugin = require('prerender-spa-plugin')

module.exports = {
  entry: {
    js: './src/main.js',
    css: './src/style/index.js'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].build.js'
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
            'scss': [
              'vue-style-loader',
              'css-loader',
              'autoprefixer-loader',
              'sass-loader',
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: ['./src/style/mixins.scss',
                              './src/style/functions.scss',
                              './src/style/variables.scss']
                }
              }
            ],
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loader: 'vue-style-loader!css-loader!autoprefixer-loader!sass-loader',
      },
      {
        test: /\.sass$/,
        loader: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]',
          outputPath: 'image/'
        }
      },
      {
        test: /-img.svg$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'image/'
        }
      },
      {
        test: /-icon.svg$/,
        loader: 'vue-svg-loader', // `vue-svg` for webpack 1.x
        options: {
          // optional [svgo](https://github.com/svg/svgo) options
          svgo: {
            plugins: [
              {removeDoctype: true},
              {removeComments: true},
              {removeStyleElement: true}
            ]
          }
        }
      }
    ]
  },
  // plugins: [
  //   new PrerenderSpaPlugin(
  //     // Absolute path to compiled SPA 
  //     path.join(__dirname, './dist'),
  //     // List of routes to prerender 
  //     [ '/contacts' ]
  //   )
  // ],
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      "img": path.resolve(__dirname, 'src/assets/image')
    },
    extensions: [".js", ".vue"]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: false,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
