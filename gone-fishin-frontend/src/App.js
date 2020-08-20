import React from 'react';
import './App.css';
import DestinationsContainer from './containers/DestinationsContainer'
import styled from 'styled-components'
import Navbar from './components/Navbar'
// we want the Navbar to be used within our whole app so it needs to be imported in app.js

const Title = styled.h1`
color: blue;
font-size: 100px;
`
// setting a default style for our title which is called below.



class App extends React.Component {

  render(){
    return(
      
      <div className="App">
        <Navbar />
        <Title>Gone Fishin'</Title>
      // here we render App, Navbar and Title (as mentioned above)

      <DestinationsContainer />  
      // rendering the destinationscontainer



      </div>
      
    )
  }
}

export default App


