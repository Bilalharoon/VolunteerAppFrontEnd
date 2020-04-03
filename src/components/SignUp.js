import React, { Component } from "react";
import { connect } from "react-redux";
import { signupAsync } from "../store/actions";

class SignUp extends Component {
  state = {
    username: "",
    password: "",
    role: "volunteer"
  };

  onChangeHandler = event => {
    switch (event.target.name) {
      case "username":
        this.setState({ username: event.target.value });
        break;
      case "password":
        this.setState({ password: event.target.value });
        break;
      case "role":
        this.setState({ role: event.target.value });
        break;
      default:
        break;
    }
  };

  onSubmitHandler = () => {
    this.props.signUp(
      this.state.username,
      this.state.password,
      this.state.role
    );
  };
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        <input
          name="username"
          type="username"
          placeholder="username"
          onChange={this.onChangeHandler}
          value={this.state.username}
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          onChange={this.onChangeHandler}
          value={this.state.password}
        />
        <select
          name="role"
          onChange={this.onChangeHandler}
          value={this.state.role}
        >
          <option value="volunteer">Volunteer</option>
          <option value="organizer">Organizer</option>
        </select>
        <input type="submit" />
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (username, password, role) =>
      dispatch(signupAsync({ username, password, role }))
  };
};
export default connect(null, mapDispatchToProps)(SignUp);
