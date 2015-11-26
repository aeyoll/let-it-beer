import React, { Component } from 'react'
import Beer from '../components/beer/beer'
import $ from 'jquery'
import slug from 'slug'

class DetailRoute extends Component {
  constructor() {
    super()

    this.state = {
      beer: {}
    }
  }

  fetchData() {
    const uuid = this.props.params.beerUuid

    $.get(this.props.app.api + '/beers/' + uuid + '/fetch_data/', function(data) {
      var beer = data

      this.setState({
        beer: beer,
      })
    }.bind(this))
  }

  componentDidMount() {
    const uuid = this.props.params.beerUuid

    $.get(this.props.app.api + '/beers/' + uuid, (data) => {
      var beer = data

      if (beer._has_fetched === false) {
        this.fetchData()
      }

      this.setState({
        beer: beer,
      })

      this.props.actions.updateAppTitle(beer.name)
      this.props.actions.updateAppClass(slug('is-' + this.state.beer.style).toLowerCase())
    })
  }

  render() {
    return (
      <div>
        <Beer beer={this.state.beer}></Beer>
      </div>
    )
  }
}

export default DetailRoute
