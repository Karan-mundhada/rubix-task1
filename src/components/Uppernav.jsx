import React from 'react'

const Uppernav = ({isSidebarOpen, toggleSidebar}) => {
  return (
    <div
      className={`h-10 fixed z-10 top-0 p-3 right-0 ${
        isSidebarOpen ? "w-5/6" : "w-11/12"
      } bg-primary`}
    >
      <button
        className={`fixed top-0 left-64 z-50 p-2 text-white transform ${
          isSidebarOpen ? "translate-x-1/4" : "translate-x-0"
        }`}
        onClick={toggleSidebar}
      >
        ☰
      </button>
    </div>
  );
};

export default Uppernav;
