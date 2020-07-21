import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider';

class Person extends React.Component {
	render() {
		return (
			<div className="box col-md-2 col-6">
				<Icon name="directions_walk" color="black" />
				<Slider
					min={this.props.min}
					max={this.props.max}
					onChange={this.props.onChange}
					value={this.props.steps}
				/>
			</div>
		);
	}
}

export default Person;
