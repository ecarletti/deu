const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: { 
        path: __dirname + '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
          {
            test: /\.mp3$/,
            loader: 'file-loader'
         },
          {
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                  loader: 'file-loader',
                },
            ],
          },
          {
            test: /\.html$/i,
            loader: 'html-loader',
          }, 
          {
            test: /\.css$/i,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.s[ac]ss$/i,
            use: [
            // Creates `style` nodes from JS strings
                "style-loader",
            // Translates CSS into CommonJS
                "css-loader",
            // Compiles Sass to CSS
                "sass-loader",
            ],
          },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ]
}