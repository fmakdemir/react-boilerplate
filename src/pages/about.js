import React from 'react';
import RefreshIndicator from 'material-ui/RefreshIndicator';

class About extends React.Component {
	render() {
		return (
			<div>
				<RefreshIndicator
					size={50}
					left={70}
					top={0}
					loadingColor="#FF9800"
					status="loading"
					style={{display: 'inline-block', position: 'relative'}}
				/>
			</div>);
	}
}

export default About;
