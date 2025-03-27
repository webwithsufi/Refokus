import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  let products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      live: true,
      case: false,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      live: true,
      case: true,
    },
    {
      title: "Rainfall",
      description:
        "We crafted a website for Rainfall Ventures, developing prototypes and custom code that ultimately allows their team to update content regularly and with ease.",
      live: true,
      case: true,
    },
  ];
  let [position, setposition] = useState(0);
  let mover = (val) => {
    setposition(val * 20);
  };
  return (
    <div className="mt-10 relative">
      {products.map((elem, index) => (
        <Product mover={mover} count={index} key={index} val={elem} />
      ))}
      <div className="absolute top-0 left-0  w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: position, x: "-50%" }}
          animate={{ y: position + `rem` }}
          className="window absolute left-[46%] max-lg:left-[44%] max-sm:w-[15rem] max-lg:w-[22rem]  w-[26rem]  overflow-hidden h-[20rem]"
        >
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full "
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover rounded-3xl "
              src="/arqitel.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover rounded-3xl "
              src="/ttr.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover rounded-3xl "
              src="/yir.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover rounded-3xl "
              src="/yahoo.mp4"
            ></video>
          </motion.div>
          <motion.div
            animate={{ y: -position + `rem` }}
            className="w-full h-full"
          >
            <video
              autoPlay
              muted
              loop
              className="absolute object-cover rounded-3xl "
              src="/rainfall.mp4"
            ></video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
