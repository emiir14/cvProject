if (process.env.NODE_ENV === 'production') {
  webpackConfig.plugins = webpackConfig.plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      mangle: false,
      test: /\.(js|jsx)$/
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ])
}