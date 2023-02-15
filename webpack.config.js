const path = require('path');
const Htmlplugin = require('html-webpack-plugin');

module.exports = {
    mode:'development',
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        port: 3000|3001|3002,
        static: {
          directory: path.join(__dirname, 'public'),
    }},
    resolve : {
        extensions: ['.js','.jsx'],
    },
    plugins: [
        new Htmlplugin({
            template: path.resolve(__dirname,'public','index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: 'babel-loader',    
            }
        ]
    },
};