import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";
class LogOut extends Component {
  componentDidMount() {
    localStorage.clear();
    this.props.logout();
  }

  render() {
    return <Redirect to="/" />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: actionTypes.LOGOUT })
  };
};
export default connect(null, mapDispatchToProps)(LogOut);
