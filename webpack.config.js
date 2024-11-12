// webpack.config.js

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true, // Чистит папку dist перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
        new VueLoaderPlugin(),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'), // Указываем папку для статических файлов
        },
        compress: true,
        port: 9000,
        hot: true, // Включаем HMR (горячую перезагрузку) для удобства разработки
    },
};
