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
    entry: './index.ts',
    output: {
        filename: 'index.js',
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
        app: './app.ts'
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
