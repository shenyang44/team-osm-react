import React from "react";
import { Link } from "react-router-dom";
import NAVBAR from "../components/navbar";
import "./Home.css";

const Home = () => {
  return (
    <div className="menu">
      <NAVBAR />
      <div className="iconss">
        <div>
          <Link className="iconn" tag={Link} to="/blood">
            <i class="fas fa-vial fa-4x"></i>
          </Link>
        </div>
        <div>
          <Link className="iconn" tag={Link} to="/event">
            <i class="far fa-calendar-alt fa-4x"></i>
          </Link>
        </div>
        <div>
          <Link className="iconn" tag={Link} to="/faq">
            <i class="fas fa-info-circle fa-4x"></i>
          </Link>
        </div>
        <div>
          <Link className="iconn" tag={Link} to="/SearchForm">
            <i class="fas fa-search-location fa-4x"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
