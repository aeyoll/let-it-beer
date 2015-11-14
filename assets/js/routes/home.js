import React, { Component } from 'react'

class Home extends Component {
  componentDidMount() {
    this.props.actions.updateTitle('Let it beer!')
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}

export default Home
