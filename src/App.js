import React from 'react'
import { connect } from 'react-redux'

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.myName}</h1>
      <button onClick={() => props.changeName("sourav")}>Change Name</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    myName: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    changeName: (name) => {dispatch({type: 'CHANGE_NAME', payload: name})}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
