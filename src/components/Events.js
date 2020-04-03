import React, { Component } from "react";
import Axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
            return (
              <li key={event.id}>
                <Link
                  to={{
                    pathname: `/events/${event.id}`,
                    state: event
                  }}
                >
                  {event.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <h1>My Events</h1>
        <ul>
          {this.state.events.map(event => {
            // iterate through all the events
            return event.volunteers
              .filter(v => v.usersId === this.props.userId) // filter all the volunteers whose id that match the user's id
              .map(v => (
                <li key={v.id}>
                  <Link
                    to={{
                      pathname: `/events/${event.id}`,
                      state: event
                    }}
                  >
                    {event.name}
                  </Link>
                </li>
              )); // return the name of the event
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
