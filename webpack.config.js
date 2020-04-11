const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = function (vvv) {
    console.info(vvv)
    return {
        mode: 'development', // "production" | "development" | "none"
        entry: './src/index.tsx',
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'build')
        },
        devtool: "source-map",
        resolve: {
            extensions: [ '.tsx', '.ts', '.js', '.json' ]
        },
        devServer: {
            contentBase: path.join(__dirname, "build"),
            compress: true,
            port: 9000
        },
        module: {
            rules: [
                // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
                {
                    test: /\.tsx?$/,
                    use: 'awesome-typescript-loader',
                    exclude: /node_modules/
                },
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
                { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
                {
                    test: /\.(jpg|png|svg)?$/,
                    use: 'file-loader',
                    exclude: /node_modules/
                },
            ]
        },
        // When importing a module whose path matches one of the following, just
        // assume a corresponding global variable exists and use that instead.
        // This is important because it allows us to avoid bundling all of our
        // dependencies, which allows browsers to cache those libraries between builds.
        externals: {
            "react": "React",
            "react-dom": "ReactDOM"
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                title: 'Orange UI for React',
                inject: 'body',
                template: 'public/index.html',
                favicon: 'public/favicon.ico'
            })
        ]
    }
}