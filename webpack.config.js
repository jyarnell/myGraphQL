const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './lambda.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lambda.bundle.js'
    }, target: 'node',
    node: {
        __dirname: false,   // if you don't put this is, __dirname
        __filename: false,  // and __filename return blank or /
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/, /public/, /dist/],
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};