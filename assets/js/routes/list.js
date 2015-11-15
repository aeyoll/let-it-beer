import React, { Component } from 'react'
import BeerList from '../components/beer-list/beer-list'
import $ from 'jquery'

class List extends Component {
  constructor() {
    super()

    this.state = {
      beers: []
    }
  }

  componentDidMount() {
    this.props.actions.updateTitle('Beer list')
    this.props.actions.updateAppClass('');

    $.get('/api/beers', function(data) {
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

export default List
