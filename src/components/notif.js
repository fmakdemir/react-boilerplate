import React from 'react';
// components
import Snackbar from 'material-ui/Snackbar';
// redux binding
import { connect } from 'react-redux';
import { closeNotifAction } from 'actions/notif';

class Notif extends React.Component {
	render() {
		return (
			<Snackbar
				open={this.props.open}
				message={this.props.message}
				action="close"
				autoHideDuration={3000}
				onActionTouchTap={this.props.onActionTouchTap}
				onRequestClose={this.props.onRequestClose}
			/>
		);
	}
}

Notif.propTypes = {
	open: React.PropTypes.bool.isRequired,
	message: React.PropTypes.string.isRequired,
	onActionTouchTap: React.PropTypes.func.isRequired,
	onRequestClose: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return state.notif;
};

const mapDispatchToProps = (dispatch) => {
	return {
		onActionTouchTap: () => { // update store
			dispatch(closeNotifAction());
		},
		onRequestClose: () => { // update store
			dispatch(closeNotifAction());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Notif);
