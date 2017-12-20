const webpack = require('webpack');

const moduleCommon = {
    rules: [
        {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: [
                {
                    loader: 'ts-loader'
                }
            ]
        }
    ]
};

let electronMain = {
    target: 'electron-main',
    context: __dirname + '/src',
    entry: './main.ts',
    output: {
        filename: 'main.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: moduleCommon
};

let electronRenderer = {
    target: 'electron-renderer',
    context: __dirname + '/src',
    entry: {
        dialog: './dialog.ts',
        index: './index.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: moduleCommon
};

module.exports = [electronMain, electronRenderer];
