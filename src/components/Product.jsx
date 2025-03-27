import React from "react";
import Button from "./Button";

function Product({ val, count, mover }) {
  return (
    <div className="w-full max-sm:px-2 max-lg:px-2 max-sm:py-2 py-20 h-[20rem] text-white">
      <div
        onMouseEnter={() => {
          mover(count);
        }}
        className="max-w-screen-lg max-sm:h-full mx-auto flex max-sm:items-end   items-center justify-between "
      >
        <h1 className="text-6xl max-sm:text-2xl   max-sm:pb-12 capitalize font-medium">
          {val.title}{" "}
        </h1>
        <div className="detls max-sm:w-[70%] w-1/3">
          <p className="max-sm:mb-3 mb-10  max-sm:text-xs">{val.description}</p>
          <div className="flex items-center gap-5">
            {val.live && <Button />}
            {val.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
