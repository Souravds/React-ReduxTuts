// Intial State
const iState = {
  name: "Ramesh",
  wishes: ["eat","play"]
}

// passing the state through reducer
const reducer = (state=iState, action) => {
  if (action.type === 'CHANGE_NAME') {
      return {
        ...state,
        name: action.payload
      }
  }  
  return state
}

export default reducer;