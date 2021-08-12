import React, { useEffect } from 'react';
import './App.css';
import Navbar from './navbar';
import Home from './home';
import Cart from './Cart';
import SignIn from './SignIn';
import Orders from './orders';
import CheckOut from './checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from './firebase'
import { StateValue } from './StateProvider'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe("pk_test_51ICWPNGmEcEmaWVS0lJzvO7M8jrKAeHkSroAyzFNS1USzBtWxtFeGYKJC0GpIWXMmVVeBGNEfI0nAgCes30OcLav0004kbtrco");

function App() {
  const [{ basket, user }, dispatch] = StateValue();
  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {

        dispatch({
          type: "ADD_USER",
          user: authUser
        })
      }
      else {
        dispatch({
          type: "ADD_USER",
          user: null
        })

      }
    })

  }, [])
  return (
    <Router>
      <div className="App">


        <Switch>
          <Route path="/checkout">
            <Navbar />
            <Elements stripe={promise}>

              <CheckOut />
            </Elements>
          </Route>

          <Route path="/orders">
            <Navbar />
            <Orders />
          </Route>
          <Route path="/login">

            <SignIn />
          </Route>
          <Route path="/Cart">
            <Navbar />
            <Cart />
          </Route>
          <Route exact path="/">
            <Navbar />
            <Home />

          </Route>
        </Switch>



      </div>
    </Router>
  );
}

export default App;
