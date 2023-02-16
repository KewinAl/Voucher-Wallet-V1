import React from "react";
import ReactDOM from "react-dom/client";
import { persistor, rootStore } from "./Store/rootStore";
import { setAuth } from "./Store/authSlice";
import { Provider } from "react-redux";
import AppRoutes from "./AppRoutes";
import "./index.css";
import { GlobalStyle, theme } from "./styles";
import { ThemeProvider } from "styled-components";
import { PersistGate } from "redux-persist/integration/react";

const getAuthFromLocalStorage = () => {
  let authData = {};
  // Get auth data from local
  const authDataString = localStorage.getItem("auth");

  if (authDataString) {
    // if exists, convert to JS
    authData = JSON.parse(authDataString);
  }
  // console.log('authDataString', authData)
  return authData; // return data
};
//change the state
rootStore.dispatch(setAuth(getAuthFromLocalStorage()));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={theme}>
      <Provider store={rootStore}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <AppRoutes />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  </>
);
