const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');


const port = 3000;
const [_, host] = process.env.GITPOD_WORKSPACE_URL.split('://') ?? null;
const publicUrl = host ? `${port}-${host}`  : `http://localhost:${port}`;


module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.(css|scss)$/, use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "sass-loader" // compiles Sass to CSS
          }]
        },
        { 
          test: /\.(png|svg|jpg|gif)$/, use: {
            loader: 'file-loader',
            options: { name: '[name].[ext]' } 
          }
        }, //for images
        { test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/, use: ['file-loader'] } //for fonts
    ]
  },
  resolve: {
    extensions: ['*', '.js']
  },
  devtool: "source-map",
  devServer: {
    allowedHosts: 'all',
    compress: true,
    port: port,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      Popper: 'popper.js',
      jQuery: 'jquery',
      // In case you imported plugins individually, you must also require them here:
      Util: "exports-loader?Util!bootstrap/js/dist/util",
      Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    }),
    new HtmlWebpackPlugin({
        favicon: '4geeks.ico',
        template: 'template.html'
    })
  ]
};

// new PrettierPlugin({
//   parser: "babel",
//   printWidth: 80,             // Specify the length of line that the printer will wrap on.
//   tabWidth: 4,                // Specify the number of spaces per indentation-level.
//   useTabs: true,              // Indent lines with tabs instead of spaces.
//   bracketSpacing: true,
//   extensions: [ ".js", ".jsx" ],
//   jsxBracketSameLine: true,
//   semi: true,                 // Print semicolons at the ends of statements.
//   encoding: 'utf-8'           // Which encoding scheme to use on files
// }),