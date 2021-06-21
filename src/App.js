import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    myName: state.name
  }
}

export default connect(mapStateToProps)(App)
