const path = require('path');
const express = require('express');
const webpack_config = require('./webpack.config');
const fs = require('fs');

const app = express();
console.log('Express environment:', app.settings.env);
// switch (app.settings.env) {
// 	case 'development':
		const webpack = require('webpack');
		const compiler = webpack(webpack_config);
		app.use(require('webpack-dev-middleware')(compiler, {
			publicPath: webpack_config.output.publicPath
		}));

		app.use(require('webpack-hot-middleware')(compiler));
// 		break;
// 	case 'production':
// 		var output = webpack_config.output;
// 		console.log('Static files mapped from:', output.publicPath);
// 		console.log('Static files mapped to:', output.path);
// 		app.use(output.publicPath, express.static(output.path));
// 		break;
// 	default: break;
// }

app.get('/', function(req, res) {
	console.info('Requested:', req.path);
	res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, function(err) {
	if (err) {
		return console.error(err);
	}

	console.log('Listening at http://localhost:3000/');
});
