import React, { Component } from 'react'
import SearchBar from '../components/search-bar/search-bar'
import SearchResults from '../components/search-results/search-results'
import $ from 'jquery'

class Search extends Component {
  constructor() {
    super()

    this.state = {
      query: 'De Molen',
      beers: [],
      userBeers: []
    }

    this.handleUserInput  = this.handleUserInput.bind(this)
    this.handleUserSubmit = this.handleUserSubmit.bind(this)
    this.handleBeerAdd    = this.handleBeerAdd.bind(this)
  }

  componentDidMount() {
    this.props.actions.updateTitle('Search a beer')

    $.get('/api/beers', function(data) {
      var beers = data.results

      if (beers.length) {
        this.setState({
          userBeers: beers,
        })
      }
    }.bind(this))
  }

  handleUserInput(query) {
    this.setState({
      query: query
    })
  }

  handleUserSubmit(beers) {
    this.setState({
      beers: beers
    })
  }

  handleBeerAdd(beer) {
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

export default Search
