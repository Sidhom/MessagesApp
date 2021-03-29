const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
      },
    output: {
        filename: 'bundle.js',
      },
    module: {
      
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },

            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            },
            {
              test: /\.css$/,
              use: [
                'style-loader',
                {
                  loader: 'css-loader',
                  options: {
                    importLoaders: 1,
                    modules: true
                  }
                }
              ]
            },
            {
              test: /\.(jpe?g|png|gif|svg)$/i, 
              loader: 'file-loader',
              options: {
                name: './src/public/[name].[ext]'
              }
            }
        ]
    },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    })
  ]
};