var config = {
  context: __dirname,
  entry:   {
  app: "./components/app/app"
  },
 
  output: {
      path: __dirname +'/prod',
      filename: '[name].js',
  },   

  watch: true,

  watchOptions: {
    aggregateTimeout: 200
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  }

}

module.exports = config;