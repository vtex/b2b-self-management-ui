const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './demo/index',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.*', '.js', '.jsx', '.ts', '.tsx'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 3000,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'demo', 'index.html'),
        }),
    ],
}