

export function fetchDestinations() {
  return (dispatch) => {
    //fetch to the api to get all destinations
   fetch("http://localhost:3000/api/v1/destinations/")
    .then(response => response.json())
    .then(destinations => dispatch({
      type: 'FETCH_DESTINATIONS',
       payload: destinations
    }))
    //dispatches the fetch destinations action to the store
  }
}

