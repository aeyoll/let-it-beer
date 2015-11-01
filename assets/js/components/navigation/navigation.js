import React, { Component } from 'react'
import { Link } from 'react-router'

class Navigation extends Component {
  render() {
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/search">Search a beer</Link></li>
      </ul>
    );
  }
}

export default Navigation;
