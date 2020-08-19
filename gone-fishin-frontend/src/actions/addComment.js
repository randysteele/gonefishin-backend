export const addComment = (comment, destinationId) => {
// fetch to the backend and getting a specific destination 
    return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${destinationId}/comments`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(comment)
    })
    .then(response => response.json())
    .then(destination => dispatch({type: 'ADD_COMMENT', payload: destination}))
    }
}
// dispatched a action to the store
export default addComment
