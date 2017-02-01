var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
	entry: {
		'main': ['./src/index']
	},
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'js/[name].js',
		// filename: 'js/[name].[hash].js',
		publicPath: '/public'
	},
	plugins: [
		// new ExtractTextPlugin("css/[name].css")
		// new ExtractTextPlugin("css/[name].[hash].css")
	],
	module: {
		loaders: [
			// parse and transform jsx files
			{
				test: /\.js$/,
				loaders: ['babel'],
				include: path.join(__dirname, 'src')
			},
			// these two configurations make makes "css-loader!file.css" obsolete
			// Extract css files
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',
				include: path.join(__dirname, 'src')
			},
			// Extract less files
			{
				test: /\.less$/,
				loader: 'style-loader!css-loader!less-loader',
				include: path.join(__dirname, 'src')
			}
		]
	}
};

switch (env) {
case 'development':
	cfgs.devtool = 'cheap-module-eval-source-map';
	cfgs.entry['main'].unshift('webpack-hot-middleware/client');
	cfgs.plugins.push(
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	);
	cfgs.module.loaders[0].loaders.unshift('react-hot');
	break;
case 'production':
	cfgs.devtool = 'cheap-module-source-map';
	cfgs.plugins.push(
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify('production')
			}
		}),
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false
			}
		})
	);
	cfgs.module.loaders[1].loader =
		ExtractTextPlugin.extract("style-loader!css-loader");
	cfgs.module.loaders[2].loader =
		ExtractTextPlugin.extract("style-loader!css-loader!less-loader");
	break;
default: break;
}

module.exports = cfgs;
