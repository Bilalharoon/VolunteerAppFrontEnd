import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class Login extends Component {
  state = {
    username: "",
    password: "",
    redirect: false
  };
  submitHandler = async e => {
    e.preventDefault();

    this.setState({
      redirect: this.props.login(this.state.username, this.state.password)
    });
  };

  changeHandler = event => {
    if (event.target.name === "username") {
      this.setState({ username: event.target.value });
    }

    if (event.target.name === "password") {
      this.setState({ password: event.target.value });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    }
    return (
      <div className="login">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.changeHandler}
          />
          <br />
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.changeHandler}
          />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (username, password) =>
      dispatch(actions.loginAsync({ username: username, password: password }))
  };
};
export default connect(null, mapDispatchToProps)(Login);
