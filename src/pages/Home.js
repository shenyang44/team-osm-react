import React from "react";
import { Link } from "react-router-dom";
import NAVBAR from "../components/navbar";

const Home = () => {
  return (
    <>
      <NAVBAR />
      <div>
        <h1>Home</h1>
        <div>
          {" "}
          <Link style={{ color: "#48c5e5" }} tag={Link} to="/home">
            bloodtest/donate.
          </Link>
          <Link style={{ color: "#48c5e5" }} tag={Link} to="/home">
            events.
          </Link>
          <Link style={{ color: "#48c5e5" }} tag={Link} to="/faq">
            FAQ
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
