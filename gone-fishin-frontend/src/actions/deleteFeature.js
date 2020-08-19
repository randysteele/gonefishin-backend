export const deleteFeature = (featureId, destinationId) => {
  // fetch to the api to a particular feature of a particular destination. 
    return (dispatch) => {
       return fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/features/${featureId}`, { 
        method: 'DELETE'       
    })
     .then(response => response.json())
     .then(destination => dispatch({type: 'DELETE_FEATURE', payload: destination}))
  } // dispatches the delete feature action to the store. 
}
