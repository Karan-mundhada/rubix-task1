import React, { useState } from "react";
import Dasboard from "./components/Dasboard/Dasboard";
import Sidebar from "./components/Sidebar";
import Uppernav from "./components/Uppernav";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <>
      <div className="flex flex-row bg-warmGray-50 no-scrollbar">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="w-full max-h-screen">
          <Uppernav
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
          <Dasboard isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </>
  );
}

export default App;
