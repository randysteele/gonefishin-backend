import React from 'react'
import FeaturesContainer from '../containers/FeaturesContainer'
import DestinationEdit from '../components/DestinationEdit'
import CommentsContainer from '../containers/CommentsContainer'
import H2 from '../styledComponents.js/H2'




const DestinationShow = (props) => {

      let destination = props.destinations[props.match.params.id - 1]
      // props.destinations is an array of all our destinations
      // props.match.params.id <-- this gives us the id that is in our url, 
      // we add the -1 because arrays start at zero and our ids start at one. 
      // we are just accessing a certain element in the array.  
      

  
    

        return (    
            <div>    
            <h3>                
                 {destination ? destination.name : null} - {destination ? destination.city : null} -  {destination ? destination.state : null} <br></br><br></br>-  {destination ? destination.description : null} 
                // this is a ternary statement, if there is a destination we want to get it's name, city, state and description. 
            </h3>
            <h3>Edit your Destination below</h3><DestinationEdit  destination={destination} />
            // rendering the DestinationEdit component and inside that component we are setting destinationsetting
            <H2>Lake Features:</H2> <FeaturesContainer destination={destination}/>
            <H2>Comments:</H2> <CommentsContainer destination={destination} />
            </div>
            // we rendered 3 components, DestinaitonEdit, FeaturesContainer and CommentsContainer. 
        )
}


export default DestinationShow
