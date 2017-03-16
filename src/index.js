import React from 'react';
import ReactDom from 'react-dom';
import App from 'containers/app';
import Pages from 'pages';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// theming
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from 'lib/theme';
// redux thingies
import { Provider } from 'react-redux';
import { createStore, combineReducers} from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import reducers from 'reducers';
// tap event plugin
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const combinedReducers = combineReducers({
	...reducers,
	routing: routerReducer,
});

let store = createStore(combinedReducers, // combine reducers
	{ // initial data for reducers
		sidebar: false,
		notif: {open: false, message: ''},
	},
	// enable redux monitor
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render((
	<MuiThemeProvider muiTheme={theme}>
		<Provider store={store}>
			<Router history={history}>
				<Route path="/" component={App}>
					<IndexRoute component={Pages.Home}/>
					<Route path="about" component={Pages.About}/>
				</Route>
			</Router>
		</Provider>
	</MuiThemeProvider>
), document.getElementById('root'));
