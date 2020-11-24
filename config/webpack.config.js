const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../lib'),
        library: 'Nx',
        libraryTarget: 'umd'
    },
    externals: ["vue"],
    resolve: {
        mainFiles: ['index'],
        extensions: ['.js', '.vue', '.css']
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 2,
                            // modules:true
                        }
                    },
                    "sass-loader",
                    "postcss-loader"
                ]
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ]
}