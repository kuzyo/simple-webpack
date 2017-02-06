var path = require('path');

module.exports = {
    context: path.join(__dirname, 'src'), // shared folder for source files
    entry:  {
        app: './app/app.js', // relative to context
        about: './about/about.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};
