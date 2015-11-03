import React, { Component } from 'react'
import BeerList from '../beer-list'
import $ from 'jquery'

class List extends Component {
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
        <h1>Beer list</h1>
        <BeerList beers={this.state.beers}></BeerList>
      </div>
    );
  }
}

export default List;
