//State parameter is not app state, only the state this reducer (active_book) is responsible for
export default function(state = null, action){
  switch(action.type){
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state
}
