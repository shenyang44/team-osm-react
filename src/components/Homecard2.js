import React from "react";
import "../components/homecard2.css";

const HOME2 = () => {
  return (
    <div className="home">
      <a className="home-btn" id="btn-1" href="/blood">
        <div className="home-btn-title">
          <i class="fas fa-vial fa-4x"></i>
          <h5>Blood Info</h5>
        </div>
        <p>
          General information on blood & their properties With supporting text
          below as a natural lead-in to additional content.
        </p>
      </a>

      <a className="home-btn" id="btn-2" href="/events">
        <div className="home-btn-title">
          <i class="far fa-calendar-alt fa-4x"></i>
          <h5>Event</h5>
        </div>

        <p>
          With supporting text below as a natural lead-in to additional
          content.With supporting text below as a natural lead-in to additional
          content.
        </p>
      </a>

      <a className="home-btn" id="btn-3" href="/donate">
        <div className="home-btn-title">
          <i class="fas fa-info-circle fa-4x"></i>
          <h5>FAQ</h5>
        </div>

        <p>
          General information on donating blood. With supporting text below as a
          natural lead-in to additional content.
        </p>
      </a>
      <a className="home-btn" id="btn-4" href="/map">
        <div className="home-btn-title">
          <i class="fas fa-search-location fa-4x"></i>
          <h5>Locater</h5>
        </div>

        <p>
          With supporting text below as a natural lead-in to additional content.
        </p>
      </a>
    </div>
  );
};

export default HOME2;
