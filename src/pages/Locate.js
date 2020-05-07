import React from "react";
import "./Locate.css";
import Maps from "../components/maptab";
import styled from "styled-components";

const Locate = () => {
  const GoogleMap = styled.iframe`
    border: 1px solid;
  `;

  return (
    <div className="mapBox">
      <Maps>
        <div label="Clinic">
          <GoogleMap
            width="600"
            height="450"
            // frameborder="0"
            // style="border:0;"
            // allowfullscreen=""
            // aria-hidden="false"
            tabindex="0"
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63741.269887259645!2d101.60830061280357!3d3.1397194294271746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sblood%20donation%20center!5e0!3m2!1sen!2smy!4v1588841876972!5m2!1sen!2smy"
          ></GoogleMap>
        </div>
        <div label="Hospital">After</div>
        <div label="Blood Donation Centres">
          Nothing
          {/* <GoogleMap src="https://goo.gl/maps/VmBt5LejUCHMpNKD8"></GoogleMap>
          <GoogleMap src="https://goo.gl/maps/VmBt5LejUCHMpNKD8"></GoogleMap> */}
        </div>
      </Maps>
    </div>
  );
};

export default Locate;

{
  /* <iframe
  src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d63741.269887259645!2d101.60830061280357!3d3.1397194294271746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sblood%20donation%20center!5e0!3m2!1sen!2smy!4v1588841876972!5m2!1sen!2smy"
  width="600"
  height="450"
  frameborder="0"
  style="border:0;"
  allowfullscreen=""
  aria-hidden="false"
  tabindex="0"
></iframe>; */
}
