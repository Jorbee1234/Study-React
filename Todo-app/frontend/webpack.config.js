const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'app.js'
    },
    devServer: {
        port: 8080,
        static: {
            directory: path.resolve(__dirname, 'public')
        }
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: path.resolve(__dirname, 'node_modules')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'app.css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: ['@babel/plugin-proposal-object-rest-spread']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(woff2?|ttf|eot|svg)(\?.*)?$/,
                type: 'asset/resource'
            }
        ]
    }
};
