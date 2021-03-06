import React from 'react'
import { connect } from 'react-redux'
import { changeNameAction, changeWishAction } from './actions/actions';

const App = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Hello {props.myName}</h1>
      {props.mywish.map(item => <h4 key={Math.random()}>{item}</h4>)}
      <button onClick={() => props.changeName()}>Change Name</button>
      <button onClick={() => props.changeWish()}>Change Wish</button>
    </div>
  )
}

//Receive state values from store
const mapStateToProps = (state) => {
  return{
    myName: state.name,
    mywish : state.wish
  }
}
console.log(changeNameAction())
//Instruct reducer to manipulate data
const mapDispatchToProps = (dispatch) => {
  return{
    changeName: () => {dispatch(changeNameAction())},
    changeWish: () => {dispatch(changeWishAction())}
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
