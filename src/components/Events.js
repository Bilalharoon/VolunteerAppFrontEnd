import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";

class Events extends Component {
  state = {
    events: []
  };

  async componentDidMount() {
    const response = await Axios.get("/Event");
    const eventsResponse = response.data;
    console.log(eventsResponse);

    this.setState({ events: eventsResponse });
  }

  render() {
    return (
      <div>
        <h1>Events</h1>
        <ul>
          {this.state.events.map(event => {
            return <li key={event.id}>{event.name}</li>;
          })}
        </ul>
        <h1>My Events</h1>
        <ul>
          {this.state.events.map(event => {
            return event.volunteers
              .filter(v => v.usersId === this.props.userId)
              .map(v => <li key={v.id}>{event.name}</li>);
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.userId
  };
};
export default connect(mapStateToProps)(Events);
