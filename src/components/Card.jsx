import React from "react";
import { motion } from "motion/react";

import { IoIosArrowRoundForward } from "react-icons/io";

function Card({ width, start, para, hover = "false" }) {
  return (
    <motion.div
      whileHover={{
        backgroundColor: hover === "true" && "#7443ff",
        padding: "25px",
      }}
      className={`bg-zinc-800 p-5 rounded-xl  ${width} max-sm:min-h-[18rem] min-h-[25rem] flex flex-col justify-between`}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>One Heading</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-2xl font-medium mt-10">
          Lorem ipsum dolor sit amet
        </h1>
      </div>
      <div className="down w-full ">
        {start && (
          <>
            <h1 className="text-6xl font-semibold tracking-tight leading-none ">
              Start Project
            </h1>
            <button className="rounded-full py-1 mt-5 px-5 border-[1px] border-zinc-50">
              Contact Me
            </button>
          </>
        )}
        {para && (
          <p className="text-zinc-400 font-medium mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </p>
        )}
      </div>
    </motion.div>
  );
}

export default Card;
