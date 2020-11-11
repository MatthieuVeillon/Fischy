const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //  the src/index.tsx file as entry point to bundle it. If the src/index.tsx file imports other JavaScript files, bundle them as well.
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    },
    // The bundled source code files shall result in a bundle.js file in the /dist folder.
    output: {
        path: path.resolve(__dirname, '../', 'dist'),
        publicPath: '/',
        filename: 'bundle.js',
    },
    plugins: [
        new CleanWebpackPlugin(),

        new HtmlWebpackPlugin({
            title: 'Hello Webpack bundsfdled JavaScript Project',
            template: './src/index.html',
        }),
    ],
};
