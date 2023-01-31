import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import rootStore from "./Store/rootStore";
import {setAuth} from "./Store/authSlice";

const getAuthFromLocalStorage = () => {
  let authData = {}
  // Get auth data from local
  const authDataString = localStorage.getItem("auth")

  if (authDataString) { // if exists, convert to JS
      authData = JSON.parse(authDataString)
  }
  return authData // return data
}
//change the state
rootStore.dispatch(setAuth(getAuthFromLocalStorage()))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

    <App />

    </>

);


