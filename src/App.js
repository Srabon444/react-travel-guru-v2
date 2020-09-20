import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoFound from './components/NoFound/NoFound';
import Booking from './components/Booking/Booking';
import fakeData from './components/fakeData/fakeData';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';

function App() {
  return (

    <Router>
      <Header></Header>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/booking/:id">
          <Booking info={fakeData} />
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>

        <Route path="/registration">
          <Registration></Registration>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <NoFound></NoFound>
        </Route>

      </Switch>
    </Router >

  );
}

export default App;
