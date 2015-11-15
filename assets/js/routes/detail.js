import React, { Component } from 'react'
import Beer from '../components/beer/beer'
import $ from 'jquery'
import slug from 'slug'

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

      this.props.actions.updateTitle(beer.name)
      this.props.actions.updateAppClass(slug('is-' + this.state.beer.style).toLowerCase())
    }.bind(this))
  }

  render() {
    return (
      <div>
        <Beer beer={this.state.beer}></Beer>
      </div>
    )
  }
}

export default Detail
