import React from 'react';
import Helmet from 'react-helmet';
// custom
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import Notif from 'components/notif';
// stlyes
import style from './app.less';

class App extends React.Component {
	constructor(props) {
		super(props);
		let activePage = false;
		if (this.props.children) {
			activePage = this.props.children.type.displayName;
			activePage = activePage.replace(/^Connect\((.*)\)/, '$1');
		}
		let title = 'Hi' + (activePage? ' - ' + activePage: '');
		this.state = {
			title,
		};
	}
	render() {
		return (
			<div className={style.app}>
				<Helmet title={this.state.title} />
				<Header
					title="Fma's React Boilerplate"
					icon="/img/icon-32x32.png" />
				<SideBar style={{
					float: 'left',
				}} />
				<div className={style.main_wrapper}>
					{this.props.children}
				</div>
				<Footer />
				<Notif />
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired,
};

export default App;
