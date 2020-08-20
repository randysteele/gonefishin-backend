
export default function destinations(state = {destinations: []}, action) {
  let destinations = state.destinations.map(destination => {
    if (destination.id === action.payload.id) {
     return action.payload
    } else {
      return destination
    }
  }) 
  // we are setting a variable to reduce the amount of times we are writing the same code. 
  // in that variable we are mapping over state.destinations.
  // if destinaiton.id and action.payload.id match we will return the payload of that particular action (action.payload)
  // otherwise we will return 
  // Z advised to try to rewrite this using slice or splice.

    switch(action.type){
    case 'FETCH_DESTINATIONS':
      return {destinations: action.payload}
    case 'ADD_FEATURE':          
      return {...state, destinations: destinations}
        // when we update state we need to use the spread operator so that we are making a copy of it not overwriting it. 
      case 'DELETE_FEATURE':
         // debugger
          return {...state, destinations: destinations}
      case 'EDIT_DESTINATION':
          return {...state, destinations: destinations} 
          case 'ADD_COMMENT':
            return {...state, destinations: destinations}   
        
        // the switch and case statements decide which action should be called when there is a match. 
        //if no match is found we use the default below. 
    default:
    return state
    }
}

