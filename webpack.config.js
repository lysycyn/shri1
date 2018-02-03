const path = require('path');

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || '3000';


const devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false')),
});

module.exports = {
    entry: {
        index: './static/entries/index.js',
        main: './static/entries/main.js',
        new_meeting: './static/entries/new_meeting.js',
        edit_meeting: './static/entries/edit_meeting.js',
        modal_success: './static/entries/modal_success.js',
        modal_cancel: './static/entries/modal_cancel.js',
    },
    output: {
        path: path.resolve('./build'),
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader!postcss-loader',
            },
            {
                test: /\.(png|svg|ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
            },
            {
                test: /\.hbs$/,
                exclude: /node_modules/,
                loader: 'handlebars-loader',
            },
            {
                test: /\.mustache$/,
                exclude: /node_modules/,
                loader: 'mustache-loader',
            },
        ],
    },
    resolve: {
        extensions: ['*', '.js'],
    },
    devServer: {
        contentBase: './build',
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true,
        compress: true,
        port: PORT,
        host: HOST,
    },

    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './static/templates/index.hbs',
            chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
            filename: 'main.html',
            template: './static/templates/main.hbs',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            filename: 'new_meeting.html',
            template: './static/templates/new_meeting.hbs',
            chunks: ['new_meeting'],
        }),
        new HtmlWebpackPlugin({
            filename: 'edit_meeting.html',
            template: './static/templates/edit_meeting.hbs',
            chunks: ['edit_meeting'],
        }),
        new HtmlWebpackPlugin({
            filename: 'modal_success.html',
            template: './static/templates/modal_success.hbs',
            chunks: ['modal_success'],
        }),
        new HtmlWebpackPlugin({
            filename: 'modal_cancel.html',
            template: './static/templates/modal_cancel.hbs',
            chunks: ['modal_cancel'],
        }),
        devFlagPlugin,
    ],
};
