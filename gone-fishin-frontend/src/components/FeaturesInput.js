import React from 'react'
import {connect} from 'react-redux'
import {addFeature} from '../actions/addFeature'
// this componenet needs access to these files so we have to import them. 
import Button from '../styledComponents.js/Button'
// imported this so we can have the sytling for the buttons as described in '../styledComponents.js/Button' file


class FeaturesInput extends React.Component {

    state = {
        name: ""
    }
    // setting local state to an object with a name key and a value of a empty string. 
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value            
        })
        // handle change is used to update state when a user has typed in the text areas/fields. 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addFeature(this.state, this.props.destinations.id)    
        this.setState({
         name: ''
        })
        // this lets us update state when the user submits the form.
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
            // we have to call handleSubmit here or nothing will happen when our users click submit. 
                    <label>Feature Name:</label>
                    <input type="text" name="name" value ={this.state.name} onChange={this.handleChange}/>
                    <Button type="submit">Submit</Button>
            // calling onChange on all text inputs so when know when there has been a change. 

                </form>


            </div>
        )
    }
}

export default connect(null, {addFeature}) (FeaturesInput)
// connecting to the react-redux store, there is no mapStateToProps but there is a mapDispatchToProps via addFeature.
