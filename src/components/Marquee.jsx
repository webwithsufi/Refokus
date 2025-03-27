import React from "react";
import { motion } from "motion/react";

function Marquee({ imagesUrls, direction }) {
  return (
    <div className="w-full overflow-hidden">
      <div className="flex min-w-full">
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex gap-7 py-10 min-w-max whitespace-nowrap flex-nowrap"
        >
          {imagesUrls.map((item, index) => (
            <img
              src={item}
              key={index}
              alt=""
              className="h-12 max-sm:h-8 md:h-16"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: direction === "left" ? "0" : "-100%" }}
          animate={{ x: direction === "left" ? "-100%" : "0" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          className="flex gap-7 py-10 min-w-max whitespace-nowrap flex-nowrap"
        >
          {imagesUrls.map((item, index) => (
            <img
              src={item}
              key={index}
              alt=""
              className="h-12 max-sm:h-8 md:h-16 "
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
