import React from 'react';

class Icon extends React.Component {
	render() {
		return (
			<span style={{ fontSize: 100, color: 'black' }} class="material-icons">
				{this.props.name}
			</span>
		);
	}
}

export default Icon;
