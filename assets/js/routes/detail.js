import React, { Component } from 'react'
import $ from 'jquery'

class Detail extends Component {
  constructor() {
    super()

    this.state = {
      beer: {}
    }
  }

  componentDidMount() {
    const uuid = this.props.params.beerUuid

    $.get('/api/beers/' + uuid, function(data) {
      var beer = data

      this.setState({
        beer: beer,
      })
    }.bind(this))
  }

  render() {
    return (
      <div>
        <h1>{this.state.beer.name}</h1>
      </div>
    )
  }
}

export default Detail
