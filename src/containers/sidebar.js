import React from 'react';
import { Link } from 'react-router';
// get sitemap from a json so we can give any link/text we want
// this is required because webpack can't dynamically detect files and I don't
// fancy
import sitemap from 'data/sitemap.json';
// redux
import { connect } from 'react-redux';
import { closeSidebarAction } from 'actions/sidebar';
// less
import style from './sidebar.less';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class Sidebar extends React.Component {
	render() {
		return (
			<Drawer
				docked={false}
				// width={200}
				open={this.props.open}
				className={style.sidebar}
				containerStyle={{position: 'absolute'}} >
				{ sitemap.map(this.renderLink.bind(this)) }
			</Drawer>
		);
	}
	renderLink({ text, link }) {
		return (
			<Link
				key={link}
				to={link}
				activeClassName="active"
				onlyActiveOnIndex={link == '/'} >
				<MenuItem
					onTouchTap={() => { this.props.onTouchTap(); }}
					key={link}
					to={link}
					>
					{text}
				</MenuItem>
			</Link>
		);
	}
}
Sidebar.propTypes = {
	open: React.PropTypes.bool.isRequired,
	onTouchTap: React.PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	return {open: state.sidebar};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTouchTap: () => {
			dispatch(closeSidebarAction());
		},
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Sidebar);
