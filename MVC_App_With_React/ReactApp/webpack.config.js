const path = require("path");

module.exports = {
    entry: {
        app: "./src/components/app.js"
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "[name].js"
    },
    devtool: "inline-source-map",
    module: {
        rules: [
            {
              test: /\.(js|jsx)$/,
              use: {
                  loader: "babel-loader"
              },
              exclude: /node_modules/ //excludes node_modules folder from being transpiled by babel. We do this because it's a waste of resources to do so.
            }
        ]
    }
}