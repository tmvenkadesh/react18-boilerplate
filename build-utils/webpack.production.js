const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = () => ({
    output: {
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.sa?css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin()]
});