import React from 'react';
// icons
import FontIcon from 'material-ui/FontIcon';
// MUI components
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions} from 'material-ui/Card';
import AutoComplete from 'material-ui/AutoComplete';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import {blue500, blue100} from 'material-ui/styles/colors';
// helpers
import update from 'immutability-helper';
import MediaQuery from 'react-responsive';
// redux
import {connect} from 'react-redux';
import {createNotifAction} from 'actions/notif';
// style
import style from './home.less';

const card_img_url = "https://scontent-otp1-1.xx.fbcdn.net/v/t31.0-8/15369220_1398510840173434_2708508428329075694_o.jpg?oh=d5a9d5233c52eae0429a7c21a7d237ff&oe=593D1BE3";
const IdeaIcon = <FontIcon className='material-icons'>lightbulb_outline</FontIcon>;
const CloseIcon = <FontIcon className='material-icons'>close</FontIcon>;

class Home extends React.Component {
	render() {
		return (
			<div className={style.home}>
				<FloatingActionButton
					backgroundColor={blue500}
					style={{position: 'fixed', right: 10, bottom: 10, zIndex: 2}}
					iconStyle={{color: blue100}}
					onClick={() => {this.props.onFabClick();}}
					>
					{IdeaIcon}
				</FloatingActionButton>
				<Card
					style={{maxWidth: 400}}
					className={style.hero_card} >
					<CardHeader
						avatar='https://avatars1.githubusercontent.com/u/1462379?v=3&s=80'
						title='From me'
						subtitle='with loves'
						closeIcon={CloseIcon}
						onClick={() => {this.props.onAvatarTap();}} />
					<MediaQuery minDeviceHeight={500}>
						<CardMedia>
							<img src={card_img_url} />
						</CardMedia>
						<CardTitle
							title="Photo by Camalti Photograpy"
							subtitle="Kuzalan - Giresun" />
						<CardText>
						  Photo is taken by my friend. Check out by clicking the
						  link at the bottom.
						</CardText>
					</MediaQuery>
					<CardActions>
						<FlatButton
							label='Click me'
							onClick={this.props.cardAction1} />
						<FlatButton
							label='Camalti Photograpy'
							href='https://fb.com/camaltiphotography'
							target="_blank"
							primary={true} />
					</CardActions>
				</Card>
			</div>
		);
	}
}

// redux mappers
const mapStateToProps = () => {
	return {};
};
const mapDispatchToProps = (dispatch) => {
	return {
		onFabClick: () => {
			dispatch(createNotifAction('I am fabolous!'));
		},
		onAvatarTap: () => {
			dispatch(createNotifAction('clicked me!'));
		},
		cardAction1: () => {
			dispatch(createNotifAction('wow you listened to a button...'));
		},
		cardAction2: () => {
			dispatch(createNotifAction('you listen to buttons?!'));
		}
	};
};

// wrap with react redux to connect to store
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home);
