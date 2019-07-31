const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin");
import HtmlWebpackPlugin from 'html-webpack-plugin';
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    resolve: {
        // 设置扩展，这样导入文件时可以省去写扩展名
        extensions: [".js", ".json", ".jsx"]
    },
    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: 'file-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ]
};