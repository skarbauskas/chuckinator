import React, { Component } from 'react';

class Text extends Component {

	render() {
		return (
			<div className='JokeContainer' >
			<div className='JokeText'>{this.props.joke}</div>
			</div>
		)
	}
}

export default Text;