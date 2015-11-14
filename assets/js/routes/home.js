import React, { Component } from 'react'
import Button from '../components/button/button'

class Home extends Component {
  componentDidMount() {
    this.props.actions.updateTitle('Let it beer!')
  }

  render() {
    return (
      <div>
        <img src="/assets/images/home.png" alt="Let it beer!" />
        <Button label="Search a beer" large ripple></Button>
      </div>
    )
  }
}

export default Home
