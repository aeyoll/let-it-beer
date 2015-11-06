import React, { Component } from 'react'
import BeerList from '../beer-list'
import $ from 'jquery'

class List extends Component {
  constructor() {
    super();

    this.state = {
      beers: [{
        id: 1,
        name: 'Punk IPA'
      }, {
        id: 2,
        name: 'Brooklyn Lagger'
      }]
    }
  }

  componentDidMount() {
    $.get('/api/beers', function(data) {
      var beers = data.results;

      if (beers.length) {
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
