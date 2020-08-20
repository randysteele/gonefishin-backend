import React from 'react'
import {connect} from 'react-redux'
import {deleteFeature} from '../actions/deleteFeature'
import Button from '../styledComponents.js/Button'
// we need access to these files so we have to import them




const FeaturesList = (props) => {
   // creating the component and passing it props 


   const handleDelete = (feature) => {
       props.deleteFeature(feature.id, feature.destination_id)

   }
   // calling the deleteFeature action when the user clicks the delete button. This function needs access to the feature.id 
   //and the id of the destination that the feature belongs to. 

    return (
        <div>
           {props.features && props.features.map(feature =>
            <li key={feature.id}>{feature.name}<br></br><Button onClick={() => handleDelete(feature)}>Delete</Button>
            // mapping over props.features to get access to the name of the features that belong to that destination. 
            // adding the handleDelete function and a delete button to the form so that our app knows what to do when we click delete.
       </li>
            )} 
        </div>
    )
}

export default connect(null, {deleteFeature}) (FeaturesList)
// connecting to the react-redux store, there is no first arguement(mapStateToProps) but there is a 2nd arguement (mapDispatchToProps) via deleteFeature. 
