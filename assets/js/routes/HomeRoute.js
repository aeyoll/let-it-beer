import React, { Component } from 'react'
import Button from '../components/button/button'

class HomeRoute extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.actions.updateAppTitle('Let it beer!')
    this.props.actions.updateAppClass('')
  }

  goToSearch = () => {
    this.props.history.pushState(null, `/search/`)
  }

  render() {
    return (
      <div>
        <img src="/assets/images/home.png" alt="Let it beer!" />
        <Button label="Search a beer" onMouseDown={this.goToSearch} large></Button>
      </div>
    )
  }
}

export default HomeRoute
