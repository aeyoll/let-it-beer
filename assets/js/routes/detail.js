import React, { Component } from 'react'
import BeerList from '../beer-list'
import $ from 'jquery'

class Detail extends Component {
  constructor() {
    super();

    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    const id = this.props.params.beerId;

    $.get('/api/beers/' + id, function(data) {
      var beer = data;

      this.setState({
        beer: beer,
      });
    }.bind(this));
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
      </div>
    );
  }
}

export default Detail;
