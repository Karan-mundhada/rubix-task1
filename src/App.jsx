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
      <Sidebar isSidebarOpen={isSidebarOpen} />

      <Uppernav isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <CustList isSidebarOpen={isSidebarOpen} />
      {/* <CustomerList isSidebarOpen={isSidebarOpen} /> */}
    </div>
  );
}

export default App;
