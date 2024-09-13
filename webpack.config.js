const path = require('path');

module.exports = {
  entry: './src/index.js', // Your main JavaScript file
  output: {
    filename: 'bundle.js', // The output file name
    path: path.resolve(__dirname, 'dist'), // Directory to save the build files
  },
  mode: 'production', // or 'development'
};
