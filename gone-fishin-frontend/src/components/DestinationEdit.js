import React from 'react'
import {connect} from 'react-redux'
import {editDestination} from '../actions/editDestination'
import Button from '../styledComponents.js/Button'



class DestinationEdit extends React.Component {

    state = {
        name: '', 
        city: '', 
        state: '', 
        description: ''
}
// setting local state with name, city, state, description as empty strings

    handleChange = (event) => {
        this.setState({
           [event.target.name]: event.target.value
        })
    } // lets us know when someone is typing in the text input fields. 


    handleSubmit = (event) => {
       event.preventDefault()
      let destination = {...this.state, id: this.props.destination.id}
       this.props.editDestination(destination)    
       this.setState({
        name: '', 
        city: '', 
        state: '', 
        description: ''

       })    // lets us know when the form has been submitted so we can update.
    }



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}> // calling the handlesumbit function on the entire form. 
                <label>Lake Name: </label>
                <input type="text" placeholder="Lake Name" value={this.state.name} name="name" onChange={this.handleChange}></input>
                <label>City: </label>   
                <input type="text" placeholder="City: "value={this.state.city} name="city" onChange={this.handleChange}></input>
                <label>State: </label>   
                <input type="text" placeholder="State: "value={this.state.state} name="state" onChange={this.handleChange}></input>
                <label>Description: </label>   
                <textarea type="text" placeholder="Description: "value={this.state.description} name="description" onChange={this.handleChange}>
                </textarea>
                <Button type="submit">Submit</Button>
            // we call handle change on each input field so we know there has been a change in the data. 
                </form>
            </div>
        )
    }
}

export default connect(null, {editDestination})(DestinationEdit)

// editDestination is the equivelant to mapDispatchtoprops.
