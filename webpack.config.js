const path = require('path');

module.exports = {
  entry: './src/index.js',  // Entry point for your application
  output: {
    path: path.resolve(__dirname, 'dist'),  // Output directory
    filename: 'bundle.js'  // Output file name
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,  // Apply Babel to .js and .jsx files
        exclude: /node_modules/,  // Exclude node_modules directory
        use: 'babel-loader'  // Use Babel loader
      },
      {
        test: /\.css$/,  // Apply loaders to .css files
        use: ['style-loader', 'css-loader']  // Use style and css loaders
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']  // Resolve .js and .jsx files
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),  // Serve files from public directory
    compress: true,  // Enable gzip compression
    port: 9000  // Development server port
  }
};