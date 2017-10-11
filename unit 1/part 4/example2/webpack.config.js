let webpack = require('webpack');

module.exports = {
    context: __dirname + '/js', // Directory where our JavaScript files are
    entry: { // Our HTML entry points (usually one script per HTML file)
        index: './index.js',
        page2: './page2.js',       
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist'
    }, // Generates dist/[name].bundle.js (include this in you HTML file)    
    devServer: {
        contentBase: __dirname, // Default (project's root directory)
        publicPath: '/dist/', // Path where bundles are
        compress: true, // Enable gzip compresion when serving content
        port: 8080 // Default
    },
    module: {
        rules: [
            { // Bundles CSS code into our JavaScript bundles
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            { // Compiles ES2015+ into ES5
                test: /\.js$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['latest'] },
                }],
            },
            { // Compiles Handlebars templates
                test: /\.handlebars$/,
                loader: "handlebars-loader"
            }
        ]
    },
    plugins: [ 
        // If any class, const, variable, etc is imported from 2 entry points or more
        // it will be included inside a file called commons.bundle.js
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            minChunks: 2, // If shared by at least 2 entries goes here
        })
    ]
};
