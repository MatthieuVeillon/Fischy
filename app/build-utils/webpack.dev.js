const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    devtool: 'eval-source-map',
    // The /dist folder will be used to serve our application to the browser.
    devServer: {
        contentBase: path.resolve(__dirname, '../', 'dist'),
        port: 3000,
        hot: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new Dotenv({
            path: path.resolve(__dirname, '../', './.env.development'),
        }),
    ],
};
