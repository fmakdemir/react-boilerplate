import React from 'react';
// custom
import Header from './header';
import Footer from './footer';
import SideBar from './sidebar';
import Notif from 'components/notif';
// stlyes
import style from './app.less';

class App extends React.Component {
	render() {
		return (
			<div className={style.app}>
				<Header
					title="Fma's React Boilerplate"
					icon="/img/icon-32x32.png" />
				<section>
					<SideBar style={{
						float: 'left'
					}}/>
					<div className={style.main_wrapper}>
						<div className={style.main}>
						{this.props.children}
						</div>
						<Footer note={ 'namazvakitleri.com.tr 2017 ©' }/>
					</div>
				</section>
				<Notif />
			</div>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object.isRequired
};

export default App;
