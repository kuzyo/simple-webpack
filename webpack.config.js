var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map', // only for development
    context: path.join(__dirname, 'src'), // shared folder for source files
    entry:  {
        app: './js/app.js', // relative to context
        about: './js/about.js'
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'views', 'about.pug'),
            filename: 'about.html',
            chunks: ['about']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'views', 'index.pug'),
            filename: 'index.html',
            chunks: ['app']
        }),

        new ExtractTextPlugin('styles/app.css'),
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.pug/,
                loader: 'pug-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader!sass-loader"
                })
            },
        ]
    }
};
