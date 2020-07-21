import React from 'react';
import Icon from './core/Icon.js';
import Slider from './core/Slider';

// Heartrate est un composant qui va être relié au reactcomponent
class HeartRate extends React.Component {
	// render methode qui rend un affichage
	render() {
		console.log('HeartRate props : ', this.props);

		return (
			<div className="boximpair col-md-2 col-6">
				<Icon name="favorite" color="red" />
				<p>{this.props.heart}</p>
				<Slider
					min={this.props.min}
					max={this.props.max}
					onChange={this.props.onChange}
					value={this.props.heart}
				/>
			</div>
		);
	}
}

export default HeartRate;
