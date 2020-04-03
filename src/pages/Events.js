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
        <div>
            Please halp
            
            {events.map(event => (
                
                <div>
                    =======
                    <br>
                    </br>
                    {event.date}
                    <p>
                        {event.location}
                    </p>
                    <p>
                        {event.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Events