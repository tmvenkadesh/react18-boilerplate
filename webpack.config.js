const path = require("path")
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require("webpack-merge");
const modeConfiguration = env => require(`./build-utils/webpack.${env}`)(env);

module.exports= ({mode}={mode:"production"}) => {
    console.log("webpack mode :",mode)
    return merge( {
        mode:mode,
        entry:"./src/index.js",
        output:{
            path:path.resolve(__dirname,"public"),
            filename: "main.js"
        },
        target:"web",
        devServer:{
            port:"3000",
            static:["./public"],
            open: true,
            hot:true,
            liveReload:true
        },
        resolve:{
            extensions:[".js",".jsx",".json",".ts"]
        },
        module:{
            rules:[
                {
                    test: /\.jpe?g|png$/,
                    exclude:/node_modules/,
                    use:["url-loader","file-loader"]

                },
                {
                    test:/\.(js|jsx)$/,
                    exclude:/node_modules/,
                    use:"babel-loader"
                }

            ],
        },
        plugins :[
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.HotModuleReplacementPlugin()
        ]

    },
    modeConfiguration(mode)
    )    
};