import React, { Component } from 'react'
import SearchBar from '../components/search-bar/search-bar'
import SearchResults from '../components/search-results/search-results'
import $ from 'jquery'

class SearchRoute extends Component {
  constructor() {
    super()

    this.state = {
      query: 'De Molen',
      beers: [],
      userBeers: []
    }
  }

  componentDidMount() {
    this.props.actions.updateAppTitle('Search a beer')
    this.props.actions.updateAppClass('');

    $.get('/api/beers', function(data) {
      let beers = data.results

      if (beers.length) {
        this.setState({
          userBeers: beers,
        })
      }
    }.bind(this))
  }

  handleUserInput = (query) => {
    this.setState({
      query: query
    })
  }

  handleUserSubmit = (beers) => {
    this.setState({
      beers: beers
    })
  }

  handleBeerAdd = (beer) => {
    $.post('/api/beers/', beer)

    let userBeers = this.state.userBeers
    userBeers.push(beer)

    this.setState({
      userBeers: userBeers
    })
  }

  render() {
    return (
      <div>
        <SearchBar query={this.state.query} onUserInput={this.handleUserInput} onUserSubmit={this.handleUserSubmit}></SearchBar>
        <SearchResults beers={this.state.beers} userBeers={this.state.userBeers} onBeerAdd={this.handleBeerAdd}></SearchResults>
      </div>
    )
  }
}

export default SearchRoute
