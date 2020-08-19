export const addFeature = (feature, destinationId) => {
    //fetch request to the backend to all the features of a particular destination. 
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/features`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(feature)
    })
    .then(response => response.json())
    .then(destination => dispatch({type: 'ADD_FEATURE', payload: destination}))
    }
    // dispatching the add feature action to the store. 
}
export default addFeature
