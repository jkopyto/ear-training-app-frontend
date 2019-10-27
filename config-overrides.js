const {
    addBabelPlugin,
    getBabelLoader,
    babelInclude
} = require("customize-cra")
const webpack = require("webpack")
const path = require('path')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = {
    webpack: function (config, env) {

        config.optimization.splitChunks.chunks = () => false
        config.optimization.runtimeChunk = false

        config = addBabelPlugin([
            "react-intl",
            {
                messagesDir: "./src/intl/messages/"
            }
        ])(config)

        config.plugins.push(
            new webpack.optimize.MinChunkSizePlugin({
                minChunkSize: 15 * 1024
            })
        )

        // To get tsconfig baseUrl working
        // There is likely a better way to extract the baseUrl from tsconfig.
        config.resolve.modules.push(path.resolve(__dirname, '../src'));

        // To dramatically increase the build speed.
        // let rule = config.module.rules.find(rule => {
        //     const {
        //         loader
        //     } = rule.use[0];
        //     return loader && loader.includes('ts-loader');
        // });
        // rule.use[0].options.transpileOnly = true;
        // config.plugins.push(
        //     new ForkTsCheckerWebpackPlugin({
        //         tslint: path.resolve(__dirname, '../tslint.json'),
        //         tsconfig: path.resolve(__dirname, 'tsconfig.json')
        //     })
        // );

        const babelLoader = getBabelLoader(config)
        babelLoader.options.cacheDirectory = false
        babelInclude(["src"])
        return config
    }
}
