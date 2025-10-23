import React from "react";
import { IoGameControllerOutline } from "react-icons/io5";

const Spinner = () => {
  return (
    <div className="flex flex-col pt-25 pb-25 items-center justify-center gap-2">
      <span className="text-5xl animate-spin text-[#3f00a4]">
        <IoGameControllerOutline />
      </span>
      <span className= "text-5xl text-[#6505ff]"> gameHub</span>
    </div>
  );
};

export default Spinner;
