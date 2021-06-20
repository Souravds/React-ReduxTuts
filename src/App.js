import React, { Component } from 'react'
import Home from './Home'

export class App extends Component {
  state = {
    name: "sourav"
  }

  changeName(name){
    this.setState({
      name: name
    })
  } 

  render() {
    return (
      <div>
        {this.state.name}
        {/* <button onClick={() => {this.changeName("lili")}}>Click me</button> */}
        <Home handleChange={(name) => this.changeName(name)}/>
      </div>
    )
  }
}

export default App
