const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "main.js",
  },

  target: "web",
  devServer: {
    port: "4000",
    static: ["./public"],
    open: true,
    hot: true,
    liveReload: true,
  },
  resolveLoader: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
},
resolve: {
    modules: [
        path.join(__dirname, 'node_modules')
    ]
},
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.(sass|css|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpeg|jpg)$/,
        use: 'url-loader'
      }
    ],
  },
};