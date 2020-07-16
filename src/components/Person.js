import React from 'react';
import Icon from './core/Icon.js';

class Person extends React.Component {
	render() {
		return (
			<div>
				<div className="box col-md-2 col-6">
					<Icon />
					<Person Name="directions_walk, favorite" />
				</div>
			</div>
		);
	}
}

export default Person;
