import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/login";
import Events from "./components/Events";
import NavBar from "./components/NavBar";
import Axios from "axios";
import { connect } from "react-redux";

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
        <Route path="/register" render={() => <div>register</div>} />
        <Route path="/login" component={Login} />
        <Route path="/events/" component={Events} />
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
