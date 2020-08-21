import React from 'react'
import {connect} from 'react-redux'
import {fetchDestinations} from '../actions/fetchDestinations'
import DestinationsList from  '../components/DestinationsList'
import DestinationsInput from '../components/DestinationsInput'
import DestinationShow from  '../components/DestinationShow'
// we need access to these destination related components so we can render them
import {Route, Switch} from 'react-router-dom'
// we need access to Route and Switch so we can use them in this container component




class DestinationsContainer extends React.Component {


    componentDidMount(){
      this.props.fetchDestinations()
    }
    // we are placing our initial fetch call in our component did mount function. 

    render(){        
      return (
        <div>  
          <Switch>
         <Route  path='/destinations/new' component={DestinationsInput}/>     
         <Route  path='/destinations/:id'  render={(routerProps) => <DestinationShow {...routerProps} destinations={this.props.destinations}/>}/>   
         <Route  path='/destinations' render={(routerProps) => <DestinationsList {...routerProps} destinations={this.props.destinations}/>}/>
         </Switch><br></br>
             // Setting up 3 routes destinations/new destinations/:id and all destinations(akd show)
         
        </div>
      )
          
       }
    }
const mapStateToProps = state => {
    return {
        destinations: state.destinations
    } 
    // here we are telling connect that we want access to this piece of data from the store. 
}
export default connect(mapStateToProps, {fetchDestinations})(DestinationsContainer);
// connecting to the store and passing mapStateToProps as well as fetchDestinations. 
//the mapStateToProps() method is executed with each change to the store's state.
//whatever function we pass to the connect() function will be called each time the state changes, 
//and the first argument to that function, whatever its name, will be the state of the store.

//connect() takes whatever the return value is of the mapStateToProps() 
//function and passes it to the component that is in those last set of parentheses (in this case, DestinationsContainer).
//mapStateToProps helps us seperate concerns becuase we no longer have to pass our store in our components


// fetchDestinaitons AKA mapDispatchToProps works the same as mapStateToProps but instead of passing in state it passes in the dispatch function. 

//By default mapDispatchToProps is just dispatch => ({ dispatch }). So if you don't specify the second argument to connect(), you'll get dispatch 
//injected as a prop in your component.
