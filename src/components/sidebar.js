import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
  width: 50;
  height: 40;
  background-color: white;
  position: fixed;
  z-index: 1;
  top: 100px;
  left:10vw;
  overflow-x: hidden;
  padding-top: 8px 0;
  display-flex
`;

const Sidebar = () => {
  return (
    <>
      <StyledSidebar>
        <h2>Navigation</h2>
        <h5 style={{ color: "black" }}>
          <a href="#DoDont">Do's and Dont's</a>
        </h5>
        <h5 style={{ color: "black" }}>
          <a href="#Common">Common Misconceptions</a>
        </h5>
        <h5 style={{ color: "black" }}>
          <a href="#BD">Blood Donation Types</a>
        </h5>
        <h5 style={{ color: "black" }}>
          <a href="#BC">Blood Components</a>
        </h5>
        <h5 style={{ color: "black" }}>
          <a href="#BDProcess">Blood Donation Process</a>
        </h5>
        <h5 style={{ color: "black" }}>
          <a href="#BDSave">Whom do I help with my blood</a>
        </h5>
        <h5 style={{ color: "black" }}>
          <a href="#BDBring">What to bring</a>
        </h5>
      </StyledSidebar>
    </>
  );
};

export default Sidebar;
