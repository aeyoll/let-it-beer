import React, { Component } from 'react'
import BeerList from '../beer-list'
import Navigation from '../components/navigation/navigation'
import $ from 'jquery'

class App extends Component {
  constructor() {
    super();

    this.state = {
      beers: []
    }
  }

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
        <Navigation></Navigation>
        <h1>Let it beer!</h1>
        {this.props.children}
        <BeerList beers={this.state.beers}></BeerList>
      </div>
    );
  }
}

export default App;
