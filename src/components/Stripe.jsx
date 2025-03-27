import React from "react";

function Stripe({ val }) {
  return (
    <div className="w-[16.66%] max-sm:p-1 max-sm:py-3  flex justify-between items-center p-5 border-zinc-600 border-b-[1.5px] border-r-[1.5px] border-t-[1.5px] ">
      <img src={val.url} className="w-[65%]" alt="" />
      <span className="font-bold max-sm:text-sm text-lg">{val.number}</span>
    </div>
  );
}

export default Stripe;
