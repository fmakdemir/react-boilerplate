import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import colors from 'data/palette';

const thm_color = colors.blue.colors;
baseTheme.appBar = {
	height: 50,
	color: thm_color[500].hex,
	textColor: 'white',
};

export default getMuiTheme(baseTheme);
