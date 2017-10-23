import React, { Component } from 'react';

class Jokes extends Component {

	render() {
		const jokes = this.props.jokes;
		return (
			<div className='JokeContainer' >
					{jokes.map((joke, k) => {
					return (
					<div key={k} className='JokeText' >
						{joke.value}
					</div>
					)	
				})}

			</div>

		) //return
	}
}

export default Jokes;