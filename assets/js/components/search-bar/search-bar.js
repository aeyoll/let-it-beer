import React, { Component } from 'react'
import Button from '../button/button'

import styles from './search-bar.scss'

import $ from 'jquery'

class SearchBar extends Component {
  constructor() {
    super()
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let query = this.refs.query.value,
        beers = []

    $.post('/api/search/', { query: query }, (data) => {
      this.props.onUserSubmit(data)
    })
  }

  handleChange = (event) => {
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
        <Button label="Search" large></Button>
      </form>
    )
  }
}

export default SearchBar
