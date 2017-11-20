var config = {
  context: __dirname,
  entry:   {
  app: "./components/app/app"
  },
 
   output: {
      path: __dirname +'/prod',
      filename: '[name].js',
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