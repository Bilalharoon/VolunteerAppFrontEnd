import React, { Component } from "react";
import Axios from "axios";

class EventDetail extends Component {
    state = {
        event: {},
    };
    async componentDidMount() {
        // if we did not already fetch the events from the /events then fetch them
        if (this.props.location.state !== undefined) {
            this.setState({ event: this.props.location.state });
            console.log("events are defined");
        } else {
            const response = await Axios.get(
                `/Event/${this.props.match.params.id}`
            );
            const eventResponse = response.data;

            this.setState({ event: eventResponse });

            console.log(this.state.event);
        }
    }
    render() {
        if (!this.state.event.creator) {
            return <p>loading...</p>;
        }
        return (
            <div>
                <h1>{this.state.event.name}</h1>
                <p>Creator: {this.state.event.creator.username}</p>
                <h2>Volunteers</h2>
                <ul>
                    {this.state.event.users.map((v) => (
                        <li key={v.id}>{v.username}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default EventDetail;
