import React, { Component } from 'react'
import BeerList from '../components/beer-list/beer-list'
import $ from 'jquery'

class ListRoute extends Component {
  constructor() {
    super()

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    this.props.actions.updateAppTitle('Beer list')
    this.props.actions.updateAppClass('');

    $.get(this.props.app.api + '/beers', function(data) {
      var beers = data.results

      if (beers.length) {
        this.setState({
          beers: beers,
        })
      }
    }.bind(this))
  }

  render() {
    return (
      <div>
        <BeerList beers={this.state.beers}></BeerList>
      </div>
    )
  }
}

export default ListRoute
