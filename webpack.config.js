const path = require("path");

var SRC = path.resolve(__dirname, 'frontend/components/tracks');

module.exports = {
    entry: "./frontend/entry_file.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "./bundle.js"
    },
    module: {
        rules: [
            {
                test: [/\.jsx?$/],
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ["@babel/env", "@babel/react"]
                    }
                },
            },
            {
                test: /\.mp3$/,
                include: SRC,
                loader: 'file-loader'
            }
        ]
    },
    devtool: "source-map",
    resolve: {
        extensions: [".js", ".jsx", ".mp3", "*"]
    }
};  