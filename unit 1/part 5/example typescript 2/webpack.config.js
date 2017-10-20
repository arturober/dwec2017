let webpack = require('webpack');

module.exports = {
    devtool: 'inline-source-map',
    context: __dirname + '/src',
    entry: {
        index: './index',
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
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
                test: /\.tsx?$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'ts-loader'                
                }]
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
