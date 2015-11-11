import React, { Component } from 'react'
import $ from 'jquery'

class Detail extends Component {
  constructor() {
    super()

    this.state = {
      beer: {}
    }
  }

  fetchData() {
    const uuid = this.props.params.beerUuid

    $.get('/api/beers/' + uuid + '/fetch_data/', function(data) {
      var beer = data

      this.setState({
        beer: beer,
      })
    }.bind(this))
  }

  componentDidMount() {
    const uuid = this.props.params.beerUuid

    $.get('/api/beers/' + uuid, function(data) {
      var beer = data

      if (beer._has_fetched === false) {
        this.fetchData()
      }

      this.setState({
        beer: beer,
      })
    }.bind(this))
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
        <div><img src={this.state.beer.img_url} alt={this.state.beer.name} /></div>
        <div>{this.state.beer.description}</div>
        <div>style: {this.state.beer.style}</div>
        <div>abv: {this.state.beer.abv}</div>
        <div>ibu: {this.state.beer.ibu}</div>
        <div>name: {this.state.beer.name}</div>
        <div>num_ratings: {this.state.beer.num_ratings}</div>
        <div>overall_rating: {this.state.beer.overall_rating}</div>
        <div>seasonal: {this.state.beer.seasonal}</div>
      </div>
    )
  }
}

export default Detail
