const path = require('path');

module.exports = {
  // devtool: 'eval-source-map',
  devtool: "source-map",

  //entry file where webpack starts the bundling process
  entry: path.resolve(__dirname, 'src/index.js'),

  //location where bundled code will be saved
  output: {

    //target directory for all output files
    path: path.resolve(__dirname, './dist/assets/'),

    //name of the bundled file
    filename: 'bundle.js',
    // filename: '[name].js',

    //url to the output directory resolved relative to HTML location
    // publicPath: '/'
    publicPath: "/assets/"
  },

  target: 'web',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        exclude: /node_modules/
      },
      {
        test: /(\.css|\.scss|\.sass)$/,
        loaders: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  //webpack development server - https://webpack.js.org/configuration/dev-server/
  devServer: {
    //directory to serve content from
    contentBase: path.resolve(__dirname, './src'),
    port: 9000,

    //enable gzip compression for files served
    compress: true,

    //automatically open browser when local server boots up
    open: true,

    //sets default page to root (prevent error)
    openPage: ''
  }
};
