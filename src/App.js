import React from 'react';
import Person from './components/Person.js';
import HeartRate from './components/HeartRate.js';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends React.Component {
	constructor() {
		super();
		let state = {
			water: 1.5,
			heart: 120,
			temperature: -10,
			steps: 3000
		};
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Person />
					<HeartRate />
				</div>
				{/* Ajoutez l’attribut heart avec la valeur de la props (min) du même nom */}
				{/* <HeartRate heart={MIN_HEART} /> */}
				<h1>Hello!</h1>
				<div className="container-fluid">
					<p>Température: {MIN_TEMPERATURE}</p>
					<p>Battements de coeur: {MIN_HEART}</p>
					<p>Nombre de pas: {MIN_STEPS}</p>
				</div>
			</div>
		);
	}
}

export default App;
