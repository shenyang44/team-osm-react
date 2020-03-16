import React from "react";
import { motion } from "framer-motion";

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

const User = () => {
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
        <h1>hdhdhdhhhdhd</h1>
      </motion.div>
    </div>
  );
};

export default User;
