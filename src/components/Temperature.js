import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider';

class Temperature extends React.Component {
	render() {
		return (
			<div className="boxpair col-md-2 col-6">
				<Icon name="wb_sunny" color="yellow" />
				<p>{this.props.temperature}</p>
				<Slider
					min={this.props.min}
					max={this.props.max}
					onChange={this.props.onChange}
					value={this.props.temperature}
				/>
			</div>
		);
	}
}

export default Temperature;
