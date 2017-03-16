import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';

class Header extends React.Component {
	render() {
		return (
			<AppBar
				{...this.props}
				titleStyle={{textAlign: 'center'}}
				/>
		);
	}
}
Header.propTypes = {
	title: React.PropTypes.string.isRequired,
	onLeftIconButtonTouchTap: React.PropTypes.func.isRequired,
};

const mapStateToProps = () => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onLeftIconButtonTouchTap: () => {
			dispatch({type: 'SIDEBAR', open: true});
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header);
