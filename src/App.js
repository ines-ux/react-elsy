import React from 'react';
import Person from './components/Person.js';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;
class App extends React.Component {
	render() {
		return (
			<div>
				<Person />
				<h1>Hello!</h1>
				<div className="container-fluid">
					<p>{MIN_TEMPERATURE}</p>
					<p>{MAX_TEMPERATURE}</p>
					<p>{MIN_HEART}</p>
					<p>{MAX_HEART}</p>
					<p>{MIN_STEPS}</p>
					<p>{MAX_STEPS}</p>
				</div>
			</div>
		);
	}
}

export default App;
