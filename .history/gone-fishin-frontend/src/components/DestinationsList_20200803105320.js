import React from 'react'
// import DestinationsContainer from '../containers/DestinationsList'



const DestinationsList = (props) => {
  //  console.log(destinations)
    
    return (
        <div>
            {props.destinations.map(dest => <li key={dest.id}>{dest.data.attributes.name} - {dest.city} - {dest.state} - {dest.description}</li>)}
        </div>
    )
}



export default DestinationsList