import React from 'react';
import Icon from './core/Icon.js';

class Water extends React.Component {
	render() {
		return (
			<div className="boximpair col-md-2 col-6">
				<h3>Water</h3>
				<Icon name="local_drink" color="blue" />
				<p>{this.props.water} L</p>
			</div>
		);
	}
}

export default Water;
