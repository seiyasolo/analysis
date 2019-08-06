const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");
const darkTheme = require('@ant-design/dark-theme');

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "main.js",
        chunkFilename: "[name].chunk.js",
        path: path.resolve(__dirname, "dist"),
        publicPath: "/"
    },
    devServer: {
        historyApiFallback: true
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/,
                use: "file-loader"
            },
            // {
            //     test: /\.less$/,
            //     use: {
            //         loader: 'less-loader',
            //         options: {
            //             modifyVars: darkTheme,
            //             javascriptEnabled:true 
            //         },
            //     }
            // }
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                    options: {
                        sourceMap: true,
                        modifyVars: darkTheme,
                        javascriptEnabled: true,
                    }
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            //   favicon: "./src/assets/favicon-32x32-next.png"
        })
    ]
});