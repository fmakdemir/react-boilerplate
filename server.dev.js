process.env.NODE_ENV = 'development';

const path = require('path');
const express = require('express');
const chalk = require('chalk');
const open = require('open');
const webpack = require('webpack');

const webpack_config = require('./webpack.config');
const compiler = webpack(webpack_config);

const app = express();
const static_dir = path.resolve(__dirname, 'static');

console.log('Express environment:', app.settings.env);

// enable dev & hot reload middlewares
app.use(require('webpack-dev-middleware')(compiler, {
	publicPath: webpack_config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// send static files from static folder
app.use('/', express.static(static_dir));

app.get('*', function(req, res) {
	console.info('Requested:', req.path);
	res.sendFile(path.join(static_dir, 'index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function(err) {
	if (err) {
		return console.error(err);
	}
	console.log(chalk.green('Listening at http://localhost:' + PORT));
});
