import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Events = () => {
    const [events, setEvents] = useState([])
    useEffect(() => {
        axios({
            method: "GET",
            url: "https://team-osm.herokuapp.com/api/v1/events/",
        })
            .then(response => {
                console.log(response);
                setEvents(response.data)
            })

            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div class='container'>
            <div class="row row-cols-1 row-cols-md-2">
                {events.map(event => (
                    <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">{event.event_name}</h5>
                                <p class="card-text">{event.description} <br></br>@<br></br> {event.location}</p>
                                <p>
                                    Occuring on: {event.date}, {event.time}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Events