import React from "react";
import { IoIosReturnRight } from "react-icons/io";

function Button({ title = "Get Started" }) {
  return (
    <div className="w-32 max-sm:w-28  px-3 py-2 bg-zinc-200 flex items-center justify-around text-black rounded-full">
      <span className="text-sm max-sm:text-xs font-medium ">{title}</span>
      <IoIosReturnRight />
    </div>
  );
}

export default Button;
