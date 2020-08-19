import React from 'react'
import {connect} from 'react-redux'
import {addComment} from '../actions/addComment'
import Button from '../styledComponents.js/Button'


class CommentInput extends React.Component {

    state = {
        content: ""
    }
//this is setting local state

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value            
        }) //this handle change function let's us know when a user has started typing in our form. 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addComment(this.state, this.props.destinations.id)    
        this.setState({
         content: ''
        }) // handle submit handles the subitting of the forms and updates our state. 
    }
    

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Comment:</label>
                    <input type="text" name="content" value ={this.state.content} onChange={this.handleChange}/> 
            // this is call the onchange on the content text field so we know when the user has started typing. 
                    <Button type="submit">Submit</Button>
            // sumit button 
                </form>


            </div>
        )
    }
}

export default connect(null, {addComment}) (CommentInput)
