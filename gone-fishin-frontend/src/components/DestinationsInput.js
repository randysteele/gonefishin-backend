import React from 'react'
import {connect} from 'react-redux'
import {addDestination} from '../actions/addDestination'


class DestinationsInput extends React.Component {

    state = {
        name: '', 
        city: '', 
        state: '', 
        description: ''
} // here we set local state with name, city, state and description keys of which the values are empty strings. 

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        }) // when this event is called we want to update state, so we called setState and update state to the value of the name keys. 
    }


    handleSubmit = (event) => {
        event.preventDefault()
       this.props.addDestination(this.state)    
       this.setState({
        name: '', 
        city: '', 
        state: '', 
        description: ''
        // handle submit will update the state when a user submits a new destination. 
       })    
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> 
            //  //calling handle submit so we know when the user has submitted the form and we can now update the state with the updated data.
                <label>Lake Name: </label>
                <input type="text" placeholder="Lake Name: " value={this.state.name} name="name" onChange={this.handleChange}></input>
                <label>City: </label>   
                <input type="text" placeholder="City: " value={this.state.city} name="city" onChange={this.handleChange}></input>
                <label>State: </label>   
                <input type="text" placeholder="State: " value={this.state.state} name="state" onChange={this.handleChange}></input>
                <label>Description: </label>   
                <textarea  type="text" placeholder="Description: " value={this.state.description} name="description"  onChange={this.handleChange}>
                </textarea>
             //calling handle change so we know when the user has typed.
                <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, {addDestination})(DestinationsInput)
// addDestination is the mapDispatchToProps equilevant. This calls our asynchronour addDestination action which dispatch will send to the store. 
