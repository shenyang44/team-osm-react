import React from "react";
import { motion } from "framer-motion";
import HOME2 from "../components/Homecard2";

const pageTransit = {
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
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
        <HOME2 />
      </motion.div>
    </div>
  );
};

export default Home;
