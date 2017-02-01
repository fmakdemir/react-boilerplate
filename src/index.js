import React from 'react';
import ReactDom from 'react-dom';
import App from './containers/app';
import * as Pages from './pages';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

ReactDom.render((
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Pages.Home}/>
			<Route path="sketches" component={Pages.Sketches}/>
			<Route path="about" component={Pages.About}/>
		</Route>
	</Router>
), document.getElementById('root'));
