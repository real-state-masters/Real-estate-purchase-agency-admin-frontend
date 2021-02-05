import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from './pages/DashboardPage';

import "./App.scss";

const middleware = []

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

const initialValue = {
  properties: [],
  showFilters: false
}

const reducer = (state=initialValue, action) => {
  console.log(action)
  console.log(action.payload)

  switch (action.type) {
    case 'ADD_PROPERTIES':
      return {...state, properties: [...state.properties, ...action.payload.properties]}
    case 'ADD_FILTERS':
      return {...state, showFilters: action.payload }
    default:
      return state
  }
}


const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <LoginPage />
            </Route>
            <Route path="/sign-in">
              <LoginPage />
            </Route>
            <Route path="/sign-up">
              <SignUpPage />
            </Route>
            <Route path="/dashboard">
              <DashboardPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;