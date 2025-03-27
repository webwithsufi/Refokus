import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-lg mx-auto py-10 flex max-sm:flex-col max-lg:px-2  max-sm:px-2 gap-15">
        <div className="basis-1/2 ">
          <h1 className="text-[10rem] max-sm:text-[6.5rem]  font-semibold leading-none tracking-tight ">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4 ">
          <div className="basis-1/3 ">
            <h4 className="mb-8 text-zinc-400 capitalize font-semibold">
              socials
            </h4>
            {["instagram", "twitter (x)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3 ">
            <h4 className="mb-8 text-zinc-400 capitalize font-semibold">
              socials
            </h4>
            {["instagram", "twitter (x)", "LinkedIn"].map((item, index) => (
              <a key={index} className="block mt-2 capitalize" href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex flex-col ">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quo
              voluptatibus
            </p>
            <img
              className="w-32 mt-5"
              src="https://assets-global.website-files.com/5df3de8e749203dc3167a479/65369e818884afbae46a35fc_Webflow-badge.svg"
              alt="logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
