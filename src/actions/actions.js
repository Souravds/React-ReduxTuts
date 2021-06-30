// export const changeNameAction = (name) => {
//   return{
//     type: 'CHANGE_NAME', 
//     payload: name
//   }
// }

export const changeNameAction = () => {
  return async (dispatch) => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const res = await data.json()
    dispatch({type: 'CHANGE_NAME', payload: res[0].name})
  }
}

export const changeWishAction = () => {
  return (dispatch) => dispatch({type: 'CHANGE_WISH', payload: 'code'})
  
}