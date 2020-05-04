import React from "react";
import "./Locate.css";
import Maps from "../components/maptab";

const Locate = () => {
  return (
    <div className="mapBox">
      <Maps>
        <div label="Clinic">
          See ya later, <em>Alligator</em>!
        </div>
        <div label="Hospital">
          After &apos;while, <em>Crocodile</em>!
        </div>
        <div label="BloodBank">
          Nothing to see here, this tab is <em>extinct</em>!
        </div>
      </Maps>
    </div>
  );
};

// const container = document.createElement("div");
// document.body.appendChild(container);
// render(<Locate />, container);
export default Locate;
