import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider';

// Heartrate est un composant qui va être relié au reactcomponent
class HeartRate extends React.Component {
	// render methode qui rend un affichage
	render() {
		return (
			<div className="box col-md-2 col-6">
				<Icon name="favori" color="red" />
				<p>{this.props.heart} BPM</p>
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

export default HeartRate;
