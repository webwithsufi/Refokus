import React from "react";
import Button from "./Button";
import { TbMenuDeep } from "react-icons/tb";

function Navbar() {
  return (
    <div className="max-w-screen-lg  max-sm:px-2 px-2 flex justify-between items-center mx-auto py-6  border-b-[2px] border-zinc-700 ">
      <div className="n-left flex items-center">
        <img
          src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
          alt="refokus-logo"
        />
        <div className="links max-sm:hidden flex gap-10 ml-32">
          {["Home", "Work", "Culture", "", "News"].map((elem, index) => (
            <a
              key={index}
              className="font-regular flex items-center gap-1.5 "
              href="#"
            >
              {index === 1 && (
                <span
                  style={{ boxShadow: "0 0 0.25em #00ff19" }}
                  className="inline-block rounded-full w-2 h-2 bg-[#00ff19]"
                ></span>
              )}
              {elem.length === 0 ? (
                <span className="w-[2px] h-7 bg-zinc-700 "></span>
              ) : (
                elem
              )}
            </a>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button />
        <TbMenuDeep
          className="w-8 h-8 hidden max-sm:inline-block
 text-gray-100 hover:text-gray-400"
        />
      </div>
    </div>
  );
}

export default Navbar;
