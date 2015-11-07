import React, { Component } from 'react'
import styles from './search-bar.css'

class SearchBar extends Component {
  render() {
    return (
      <form className={styles.common}>
        <input type="text" placeholder="a beer..." />
        <button type="submit">Search</button>
      </form>
    );
  }
}

export default SearchBar;
