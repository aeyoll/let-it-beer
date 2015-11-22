import React, { Component } from 'react'

class NotFoundRoute extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.actions.updateAppTitle('Page not found')
    this.props.actions.updateAppClass('')
  }

  render() {
    return (
      <div></div>
    )
  }
}

export default NotFoundRoute
