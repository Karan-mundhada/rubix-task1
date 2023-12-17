import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Uppernav from "./components/uppernav";
import CustList from "./components/CustList";
import CustomerList from "./components/CustomerList";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="">
      <div className="flex flex-row bg-warmGray-50 no-scrollbar">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="w-full max-h-screen">
          <Uppernav
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <CustList isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
      {/* <CustomerList isSidebarOpen={isSidebarOpen} /> */}
    </div>
  );
}

export default App;
