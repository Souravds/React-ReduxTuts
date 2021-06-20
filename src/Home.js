import React, { Component } from 'react'

export class Home extends Component {
  state = {
    homeName: "suresh"
  }
  render() {
    return (
      <div>
        <h2>I am yome</h2>
        <button onClick={() => this.props.handleChange(this.state.homeName)}>Click me</button>
        </div>
    )
  }
}

export default Home
