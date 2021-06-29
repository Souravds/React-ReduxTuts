import React from 'react'
import { connect } from 'react-redux'
import { changeNameAction } from './actions/actions';

const App = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hello {props.myName}</h1>
      <button onClick={() => props.changeName()}>Change Name</button>
    </div>
  )
}

//Receive state values from store
const mapStateToProps = (state) => {
  return{
    myName: state.name
  }
}

//Instruct reducer to manipulate data
const mapDispatchToProps = (dispatch) => {
  return{
    changeName: () => {dispatch(changeNameAction())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
