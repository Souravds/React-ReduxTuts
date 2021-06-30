// passing the state through wishReducer
const wishReducer = (state=[], action) => {
  if(action.type === "CHANGE_WISH"){
    return [...state, action.payload]
  }
  return state
}

export default wishReducer;