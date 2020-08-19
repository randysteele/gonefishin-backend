export const addDestination = (data) => {
// fetching to the api to get a list of all destinations.
        return (dispatch) => {
            fetch("http://localhost:3000/api/v1/destinations/", {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then(destinations => dispatch({type: 'ADD_DESTINATIONS', payload: destinations}))
                // dispatched the ADD DESTINATIONS action to the store. 
        }
    }
