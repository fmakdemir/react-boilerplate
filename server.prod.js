process.env.NODE_ENV = 'production';

const path = require('path');
const express = require('express');
const chalk = require('chalk');
const open = require('open');

const webpack_config = require('./webpack.config');

const app = express();
console.log('Express environment:', app.settings.env);

var output = webpack_config.output;
console.log('Static files mapped from:', output.publicPath);

// send static files from dist folder
app.use(output.publicPath, express.static(output.path));

app.get('*', function(req, res) {
	console.info('Requested:', req.path);
	res.sendFile(path.resolve(output.path, 'index.html'));
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, function(err) {
	if (err) {
		return console.error(err);
	}
	console.log(chalk.green('Listening at http://localhost:' + PORT));
});
