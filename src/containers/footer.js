import React from 'react';
import './footer.less';

class Footer extends React.Component {
	render() {
		return (
			<footer>
				<center>{this.props.note || 'unknown'}</center>
			</footer>
		);
	}
}

export default Footer;
