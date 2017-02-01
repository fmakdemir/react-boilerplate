import React from 'react';
import Header from './header';
import Footer from './footer';
import SideBar from './side-bar';
// css file
import './app.less';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			test: Date.now()
		};
	}
	render() {
		return (
			<div>
				<Header title="Fma's React Boilerplate" />
				<section>
					<SideBar/>
					<div className='main'>
					{this.props.children}
					</div>
				</section>
				<Footer note={ 'Fmakdemir 2017 ©' }/>
			</div>
		);
	}
}

export default App;
