import React, { Component } from 'react'
import Navigation from '../components/navigation/navigation'

class App extends Component {
  render() {
    return (
      <div>
        <Navigation></Navigation>

        <h1>Let it beer!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default App;
