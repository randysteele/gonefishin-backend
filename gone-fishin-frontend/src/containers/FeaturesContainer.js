import React from 'react'
import FeaturesInput from '../components/FeaturesInput'
import FeaturesList from '../components/FeaturesList'
// importing the files we need access to, the ones that are related to features.



class FeaturesContainer extends React.Component {
    


    render(){
        return (
            <div>
                <FeaturesInput destinations={this.props.destination}/><br></br>
            // rendering the featuresInput component
                <FeaturesList features={this.props.destination && this.props.destination.features}/>
            // rendering the featuresList component and rendering the features of particular destinations. 
            </div>
        )
    }
}
export default FeaturesContainer
