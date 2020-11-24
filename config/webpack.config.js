const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, '../dist'),
        library: 'NxComponent',
        libraryTarget: 'umd'
    },
    externals: ["vue"],
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
}