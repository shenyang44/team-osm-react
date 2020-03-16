import React from "react";
import "./Switch.css";

const Switch = ({ isOn, handleToggle }) => {
  return (
    <>
      <div className="toggler">
        <input
          placeholder="Log In"
          checked={isOn}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
        />

        <label
          style={{ background: isOn && "#bb2734" }}
          className="react-switch-label"
          htmlFor={`react-switch-new`}
        >
          <span className={`react-switch-button`} />
          <span style={{ marginLeft: "50px" }}></span>
        </label>
      </div>
    </>
  );
};
export default Switch;
