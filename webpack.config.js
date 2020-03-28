const path = require('path');
const outputDirectory = 'dist';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	output: {
		path: path.join(__dirname, outputDirectory),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader'
				}
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	//In development mode, run react client at 3000, backend api at 8080
	//In production mode, webpack create bundle.js, only run express at 8080
	devServer: {
		port: 3000,
		open: true,
		proxy: {
			'/api': 'http://localhost:8080'
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({ template: './public/index.html' })
	]
};
