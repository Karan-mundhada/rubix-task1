import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Uppernav from "./components/uppernav";
import CustList from "./components/CustList";
import CustomerList from "./components/CustomerList";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <Uppernav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-row">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <CustList isSidebarOpen={isSidebarOpen} />
      </div>
      {/* <CustomerList isSidebarOpen={isSidebarOpen} /> */}
    </div>
  );
}

export default App;
