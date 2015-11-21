import React, { Component } from 'react'

class Signup extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    this.props.actions.updateTitle('Signup')
  }

  render() {
    return (
      <div>
        Signup form
      </div>
    )
  }
}

export default Signup
