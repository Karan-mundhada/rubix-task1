import React from "react";
import { GoBellFill } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
const Uppernav = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div
      className={`h-16  z-10 top-0 p-2 right-0 flex flex-row justify-between items-center  bg-primary `}
    >
      <button
        className={` z-50 text-white transform ${
          isSidebarOpen ? "translate-x-1/4" : "translate-x-0"
        }`}
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <div className="flex flex-row items-center">
        <div className=" flex flex-row">
          <div className="mx-2">
            <GoBellFill size={24} color="white" />
          </div>
          <div className="mx-2">
            <IoMdSettings size={24} color="white" />
          </div>
        </div>
        <div className="mx-2 border-r-2 border-l-2 px-4 border-white">
          <p className="text-white">Org Name</p>
        </div>
        <div className="mx-4 bg-secondary px-3 rounded-full p-2 ">
          <p className="font-bold text-primary">SP</p>
        </div>
      </div>
    </div>
  );
};

export default Uppernav;
