import React from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';
import Temperature from './components/Temperature';
import Water from './components/Water';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
	// le constructor est la premiere chose qui s'éxecute dans une class et qui contient l'initiation des states
	// et des fonctions
	constructor() {
		super();
		this.state = {
			water: 1.5,
			heart: 120,
			temperature: -10,
			steps: 3000
		};
		this.onHeartChange = this.onHeartChange.bind(this);
		this.onStepsChange = this.onStepsChange.bind(this);
		this.onTemperatureChange = this.onTemperatureChange.bind(this);
	}
	onHeartChange(val) {
		this.setState({ heart: val });
	}
	onStepsChange(val) {
		this.setState({ steps: val });
	}
	onTemperatureChange(val) {
		this.setState({ temperature: val });
	}
	calculateWater() {
		this.setState({ water: 1.5 });
	}
	//  render methode qui rend un affichage
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Person steps={this.state.steps} min={MIN_STEPS} max={MAX_STEPS} onChange={this.onStepsChange} />
					<HeartRate heart={this.state.heart} min={MIN_HEART} max={MAX_HEART} onChange={this.onHeartChange} />
					<Temperature
						temperature={this.state.temperature}
						min={MIN_TEMPERATURE}
						max={MAX_TEMPERATURE}
						onChange={this.onTemperatureChange}
					/>
					<Water water={this.state.water} />
				</div>
				{/* Ajoutez l’attribut heart avec la valeur de la props (min) du même nom */}
				{/* <HeartRate heart={MIN_HEART} /> */}
				{/* <h1>Hello!</h1>
				<div className="container-fluid">
					<p>Température: {MIN_TEMPERATURE}</p>
					<p>Battements de coeur: {MIN_HEART}</p>
					<p>Nombre de pas: {MIN_STEPS}</p>
				</div> */}
			</div>
		);
	}
}

export default App;
