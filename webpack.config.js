const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './client'),
        filename: 'bundle.js',
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html' }),
    new MiniCssExtractPlugin({ filename: 'styles-[fullhash].css' })],
    module: {
        rules: [{
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader,
                'css-loader']
        },],

    },
};