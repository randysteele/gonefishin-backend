import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import destinations from './reducers/destinations'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose} from 'redux'
import {BrowserRouter as Router} from 'react-router-dom'


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//add extra functionality to the Redux store.
// compose enhancer will apply our thunk middleware to the dispatch function. 
//redux devtools allow us to view the state in our app and each action that is dispatched.

const store = createStore(destinations, composeEnhancer(applyMiddleware(thunk)))
// the first argument is the reducer. 
// here we are creating our store, passing in our reducer to that store. It will return a store object. 
// then we pass this store to the Provider component which gets rendered at the top of our component tree. 
// this ensures that anytime we connect a component to the react-redux store, the store is available in our components. 
// thunk allows simple asychronous use of dispatch.
// we use applyMiddleware to create a store enhancer which will apply our thunkto the stores dispatch function. 
// next we used compose to compose our new composeEnhancer and redux dev tools.


ReactDOM.render(
<Provider store={store}> 
    //The Provider is a component that comes from our React Redux library. It wraps around our App component. It does two things for us. 
  //The first is that it will alert our Redux app when there has been a change in state, and this will re-render our React app. 
   // this ensures that anytime we connect a component to the react-redux store, the store is available in our components. 
  // provder helps us avoid having to pass store as a prop.
  //By including the Provider, we'll be able to access our Redux store and/or dispatch actions from any component we want, 
  //regardless of where it is on the component tree.

  //
<Router>
  // allows us to use BrowerRouter and put routes in our app.
<App />
</Router>
</Provider>, 
document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
