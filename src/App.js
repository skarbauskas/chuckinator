import React, { Component } from 'react';
import Chuck from './Chuck.svg';
import './App.css';
import Text from './Text';
import Jokes from './Jokes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      joke: null,
      categories: [],
      jokes: []
    }
  }

  search() {
    const SEARCH_URL = 'https://api.chucknorris.io/jokes/search?query=';
    let FETCH_URL = SEARCH_URL + this.state.query;
    fetch(FETCH_URL, {
        method: 'GET'
      })
      .then(response => response.json())
      .then(json =>  {
          const  jokes  = json.result;
          this.setState({jokes});
      })
  }

  randomQuote() {
    const RAND_URL = 'https://api.chucknorris.io/jokes/random';

    //let myHeaders = new Headers();

    const myInit = { method: 'GET',
               headers: {
                        'Accept': 'application/hal+json'
                        },
               mode: 'cors',
               cache: 'default' };


    fetch(RAND_URL, myInit)
      .then(response => response.json())
      .then(json => {
        const joke = json.value;
        //console.log('json', json);
        this.setState({joke});
      }) 
  } // randomQuote

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={Chuck} className="App-logo" alt="Chuck" />
        </header>
        <h1 className="App-intro">
          Welcome to THE CHUCKINATOR!!
        </h1>
        <p>A place to find Chuck Norris jokes.</p>
          <div>
            <button onClick={() => this.randomQuote()} >Give a random joke!</button>
            {
              this.state.joke !== null
              ? <Text joke={this.state.joke} />
              : <div></div>
            }
            
          </div>
            <div>
              <input 
              type="text"
              placeholder="Search for a Chuck joke!"
              value={this.state.query}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  this.search()
                }
              }}
              onChange={event => {this.setState({query: event.target.value})}} >
              </input>
              <button onClick={() => this.search()} >Search</button>
          </div>
          {
              this.state.jokes !== null
              ? <Jokes jokes={this.state.jokes} /> 
              : <div></div>
          }

      </div> // App
    );
  }
}

export default App;
