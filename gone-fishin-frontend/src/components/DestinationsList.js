import React from 'react'
import {Link} from 'react-router-dom'
// import this so we can use Link tags



const DestinationsList = (props) => {
    //creating the class and passing props
    
    return (
       <div>
       <h2> Fishing Lake List:</h2> {props.destinations.map(dest => <h5><div key={dest.id}>Lake Name:<Link to={`/destinations/${dest.id}`}><br></br>{dest.name}</Link>  <br></br> City: {dest.city} <br></br> State: {dest.state} <br></br> Description: {dest.description}</div></h5>)} 
   </div> 
// mapping over props.destinations so that we can get access to the city, state, name and description. we use a key prop so that there is a unique identifier
// this is a simple class and there isn't a whole lot happening here.    
 
    )
}

export default DestinationsList
