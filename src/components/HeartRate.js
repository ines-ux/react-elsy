import React from 'react';
import Icon from './core/Icon.js';

// Heartrate est un composant qui va être relié au reactcomponent
class HeartRate extends React.Component {
	// render methode qui rend un affichage
	render() {
		return (
			<div>
				<div className="box col-md-2 col-6">
					<Icon />
					<p>{this.props.heart}</p>
					<HeartRate Name="directions_walk, favorite" />
				</div>
			</div>
		);
	}
}

export default HeartRate;
