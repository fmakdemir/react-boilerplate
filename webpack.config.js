/*eslint no-console:"off"*/
var path = require('path');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
/* NOTE:
 * about "Unknown word" error with import "css!file.css": https://github.com/webpack-contrib/css-loader/issues/295#issuecomment-231510027
 * basically do not use both "css!file.css" and loader config together
 * publicPath first slash is important!! Do not delete it or dev mode won't work
 * orders of loaders MATTER
 */

var env = false;
if (process.env.NODE_ENV) {
	env = process.env.NODE_ENV;
}
var args = process.argv;
if (!env && (args.indexOf('-p') > -1 || args.indexOf('--production') > -1)) {
	env = 'production';
}
if (!env) {
	env = 'development';
}
console.log('Webpack environment:', env);

var cfgs = {
	devtool: 'cheap-module-eval-source-map',
	resolve: {
		modules: [
			path.join(__dirname, 'src'),
			'node_modules',
		],
	},
	entry: {
		'main': ['./src/index'],
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/[name].js',
		// filename: 'js/[name].[hash].js',
		publicPath: '/',
	},
	plugins: [
	],
	module: {
		rules: [
			// parse and transform jsx files
			{
				test: /\.js$/,
				use: [{loader: 'babel-loader'}],
				include: path.join(__dirname, 'src'),
			},
			// these two configurations make makes "css-loader!file.css" obsolete
			// Extract css files
			{
				test: /\.css$/,
				use: ['style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]',
						},
					},
				],
				include: [
					path.join(__dirname, 'src'),
				],
			},
			// extract css files from installed libraries
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				],
				include: [
					path.join(__dirname, 'node_module'),
				],
			},
			// Extract less files
			{
				test: /\.less$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							modules: true,
							localIdentName: '[path][name]__[local]',
						},
					},
					'less-loader',
				],
				include: path.join(__dirname, 'src'),
			},
			// Extract json files
			{
				test: /\.json$/,
				use: 'json-loader',
				include: path.join(__dirname, 'src'),
			},
		],
	},
};

switch (env) {
case 'development':
	cfgs.devtool = 'eval';
	cfgs.entry['main'].unshift('webpack-hot-middleware/client');
	cfgs.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	);
	cfgs.module.rules[0].use.unshift({loader: 'react-hot-loader'});
	break;
case 'production':
	cfgs.devtool = 'cheap-module-source-map';
	cfgs.plugins.push(
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production'),
			},
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
				screw_ie8: true,
			},
			comments: false,
		}),
		new CopyWebpackPlugin([{from: 'static'}],
			{copyUnmodified: false})
	);
	break;
default: break;
}

module.exports = cfgs;
