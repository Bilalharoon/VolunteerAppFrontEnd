import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Axios from "axios";
import { connect } from "react-redux";

import Login from "./components/login";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import SignUp from "./components/SignUp";
import LogOut from "./components/Logout";
import EventDetail from "./components/EventDetail";

Axios.defaults.baseURL = "https://localhost:44328";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.username === null) {
    }
    return (
      <Router>
        <NavBar />
        <Route
          exact
          path="/"
          render={() => <div>Hello {this.props.username}</div>}
        />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/events" component={Events} exact />
        <Route path="/events/:id" component={EventDetail} />
        <Route path="/logout" component={LogOut} />
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    username: state.username
  };
};

export default connect(mapStateToProps)(App);
