import React from 'react'
import CommentInput from '../components/CommentInput'
import CommentList from '../components/CommentList'
// importing the files that are related to the commentsContainer



class CommentsContainer extends React.Component {
    // class component 
    


    render(){
        return (
            <div>
                <CommentInput destinations={this.props.destination}/><br></br>
            // rendering the commentInput component 
                <CommentList comments={this.props.destination && this.props.destination.comments}/>
            // rendering the commentlist component and if that destination has comments that belong to it we want to show them. 
            </div>

        )
    }
}
export default CommentsContainer
