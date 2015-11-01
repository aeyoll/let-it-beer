import React, { Component } from 'react';
import BeerList from './beer-list';

class App extends Component {
  state: {
    beers: []
  };

  componentDidMount() {
    $.get('/api/beers', function(result) {
      var beers = result;

      if (this.isMounted()) {
        this.setState({
          beers: beers,
        });
      }
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>Let it beer!</h1>
        <BeerList beers={this.state.beers}></BeerList>
      </div>
    );
  }
}

export default App;
