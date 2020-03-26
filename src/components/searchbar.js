import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript } from '@react-google-maps/api'

const SearchForm = (props) => {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    axios
      .get("https://team-osm.herokuapp.com/api/v1/establishment/events")
      .then(function (response) {
        setEvent(response.data)
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [])

  return (
    <>

      <LoadScript
        id="script-loader"
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
      >
        <GoogleMap
          id="circle-example"
          mapContainerStyle={{
            height: "400px",
            width: "800px"
          }}
          zoom={7}
          center={{
            lat: -3.745,
            lng: -38.523
          }}
        />
      </LoadScript >
      <h4>Events</h4>
      {event.map((events) => (

        <>
          <hr />
          <p>Event name : {events.event_name}</p>
          <p>Description : {events.description}</p>
          <p>Location : {events.location}</p>
          <p>Time : {events.time}</p>
          <p>Date : {events.date}</p>
          <p>Establishment : {events.establishment.name}</p>
        </>
      ))}

    </>
  );
};
export default SearchForm;

