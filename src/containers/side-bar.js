import React from 'react';
import { Link } from 'react-router';
// less
import './side-bar.less';

class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			links: [
				{link: '/', 'text': 'Home'},
				{link: '/sketches', 'text': 'Sketches'},
				{link: '/about', 'text': 'About'}
			]
		};
	}
	render() {
		return (
			<div className={'side-bar'}>
				<ul role='nav'>
					{ this.state.links.map(this.renderLink) }
				</ul>
			</div>
		);
	}
	renderLink({text, link, active}) {//{ text, link }) {
		return (
			<li key={link}>
				<Link to={link} activeClassName="active" onlyActiveOnIndex={link == '/'}>{text}</Link>
			</li>
		);
	}
}
export default SideBar;
