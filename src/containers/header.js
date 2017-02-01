import React from 'react';
import './header.less';

class Header extends React.Component {
	render() {
		return (
			<header>
				<center>
					<h1> {this.props.title || 'No title'} </h1>
				</center>
			</header>
		);
	}
}

export default Header;
