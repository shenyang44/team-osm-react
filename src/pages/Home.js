import React from "react";
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

const Home = () => {
  return (
    <div className="menu">
      <motion.div
        initial="out"
        animate="in"
        exit="out"
        variants={pageTransit}
        className="iconss"
      >
        <HOME />
      </motion.div>
    </div>
  );
};

export default Home;
