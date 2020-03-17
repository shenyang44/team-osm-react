import React from "react";
import { Link } from "react-router-dom";
import NAVBAR from "../components/navbar";
import "./Home.css";
import { motion } from "framer-motion";
import HOME from "../components/HomeCard";

const pageTransit = {
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

// const pageTransition = {
//   transition: "linear"
// };

const Home = () => {
  return (
    <div className="menu">
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransit}
        // transition={pageTransition}
        className="iconss"
      >

        <HOME />

      </motion.div>
    </div>
  );
};

export default Home;
