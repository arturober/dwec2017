let webpack = require('webpack');

module.exports = {
    entry: {
        index: './js/index.js',
        page2: './js/page2.js',       
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    }, // Generates dist/bundle.js (include this in you HTML file)    
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080 // Default
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['latest'] },
                }]
            },
            {
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons.js',
            minChunks: 2, // If shared by at least 2 entries goes here
        })
    ]



};
