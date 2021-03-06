const {
    getBabelLoader,
    babelInclude
} = require("customize-cra")
const webpack = require("webpack")
const path = require('path')

module.exports = {
    webpack: function (config) {

        config.optimization.splitChunks.chunks = () => false
        config.optimization.runtimeChunk = false

        config.plugins.push(
            new webpack.optimize.MinChunkSizePlugin({
                minChunkSize: 15 * 1024
            })
        )

        // To get tsconfig baseUrl working
        // There is likely a better way to extract the baseUrl from tsconfig.
        config.resolve.modules.push(path.resolve(__dirname, '../src'));

        const babelLoader = getBabelLoader(config)
        babelLoader.options.cacheDirectory = false
        babelInclude(["src",
            path.join(__dirname, "node_modules/react-intl"),
            path.join(__dirname, "node_modules/intl-messageformat"),
            path.join(__dirname, "node_modules/intl-messageformat-parser"),
        ])
        return config
    }
}
