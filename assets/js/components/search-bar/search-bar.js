import React, { Component } from 'react'
import styles from './search-bar.scss'
import $ from 'jquery'

class SearchBar extends Component {
  constructor() {
    super()

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    var query = this.refs.query.value
    var beers = []

    $.post('/api/search/', { query: query }, function (data) {
      this.props.onUserSubmit(data)
    }.bind(this))
  }

  handleChange() {
    this.props.onUserInput(event.target.value)
  }

  render() {
    return (
      <form className={styles.common} onSubmit={this.handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="a beer..."
          value={this.props.query}
          onChange={this.handleChange}
          ref="query"
        />
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar
