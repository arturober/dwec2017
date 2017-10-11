let webpack = require('webpack');

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: './index.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080 // Default
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['env'] },
                }],
            }
        ]
    },
    // plugins: [
    //     new webpack.optimize.CommonsChunkPlugin({
    //         name: 'common',
    //         minChunks: 2, // If shared by at least 2 entries goes here
    //     })
    // ]
};