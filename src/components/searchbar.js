import React, { useState, useEffect } from "react";
import axios from "axios";
import { GoogleMap, LoadScript, StandaloneSearchBox } from '@react-google-maps/api';
import { searchBox } from 'google-maps-react';

const SearchForm = (props) => {
  const [event, setEvent] = useState([]);
  const [text, setText] = useState("")

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

  // function hanldePlacesChanged() { };

  // function handleLoad() { };

  const onLoad = (() => { })

  const onPlacesChanged = () => (this.searchBox.getPlace());

  return (
    <>

      <LoadScript
        googleMapsApiKey={process.env.REACT_APP_GOOGLE_API_KEY}
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={{
            height: "300px",
            width: "100%"
          }}
          zoom={11}
          center={{
            lat: 3.1390,
            lng: 101.6869
          }}>
          <StandaloneSearchBox
            onLoad={onLoad}
            onPlacesChanged={onPlacesChanged}
          >
            <input
              type="text"
              placeholder="SearchBox that doesnt work :/// "
              style={{
                boxSizing: `border-box`,
                border: `1px solid transparent`,
                width: `240px`,
                height: `32px`,
                padding: `0 12px`,
                borderRadius: `3px`,
                boxShadow: `0 2px 6px rgba(0, 0, 0, 0.3)`,
                fontSize: `14px`,
                outline: `none`,
                textOverflow: `ellipses`,
                position: "absolute",
                left: "50%",
                marginLeft: "-120px"
              }}
              onChange={(e) => { setText(e.target.value) }}
            />
          </StandaloneSearchBox>
        </GoogleMap>
      </LoadScript >
      <br />
      <h2>Events</h2>
      {
        event.map((events) => (

          <>
            <hr />
            <p>Event name : {events.event_name}</p>
            <p>Description : {events.description}</p>
            <p>Location : {events.location}</p>
            <p>Time : {events.time}</p>
            <p>Date : {events.date}</p>
            <p>Establishment : {events.establishment.name}</p>
          </>
        ))
      }

    </>
  );
};
export default SearchForm;

