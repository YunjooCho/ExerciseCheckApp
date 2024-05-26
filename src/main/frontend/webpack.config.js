const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'), // 정적 파일을 제공할 디렉토리 설정
        },
        compress: true,
        port: 8080,
        open: true,
        hot: true
    },
    plugins: [
        new HtmlPlugin({
            template: "./index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [autoprefixer],
                            },
                        },
                    },
                    "sass-loader",
                ],
            },
        ],
    },
};