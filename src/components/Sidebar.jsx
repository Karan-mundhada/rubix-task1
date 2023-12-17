import React, { useState }  from "react";
import {
  Home,
  Users,
  Upload,
  Download,
  Box,
  FileText,
  Shield,
  HelpCircle,
  Search,
} from "react-feather";

const Sidebar = ({ isSidebarOpen }) => {
  const sidebarItems = [
    { label: "Dashboard", icon: <Home size={20} />, link: "#" },
    { label: "Accounts", icon: <Users size={20} />, link: "#" },
    { label: "Export", icon: <Download size={20} />, link: "#" },
    { label: "Import", icon: <Upload size={20} />, link: "#" },
    { label: "Product", icon: <Box size={20} />, link: "#" },
    { label: "Documents", icon: <FileText size={20} />, link: "#" },
    { label: "Compliance", icon: <Shield size={20} />, link: "#" },
    { label: "Help", icon: <HelpCircle size={20} />, link: "#" },
    ];
    
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    // You can perform additional search-related logic here
  };

  return (
    <div
      className={` flex fixed top-0 left-0 h-screen ${
        isSidebarOpen ? "w-1/6" : "w-1/12"
      }`}
    >
      <div className="items-center bg-white text-violet-600 justify-between px-4 py-3">
        <h1 className="text-3xl font-bold">Rubix</h1>
      </div>
      <div
        className={`bg-white text-gray fixed top-16 transition-all duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-1/6"
        }`}
      >
        <div className="p-4 mt-4">
          {isSidebarOpen ? (
            <div className="flex items-center border border-gray-300 rounded-3xl">
              <div className="items-center">
                <Search size={20} className="mr-2" />
              </div>
              <input
                type="text"
                placeholder="Search menu"
                value={searchTerm}
                onChange={handleSearch}
                className="p-2 focus:outline-none"
              />
            </div>
                  ) : (
                          <></>
          )}

          {sidebarItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`flex items-center p-4 ${
                isSidebarOpen ? "hover:scale-110" : ""
              }`}
            >
              {isSidebarOpen ? (
                <>
                  {item.icon}
                  <span className="ml-1 p-1">{item.label}</span>
                </>
              ) : (
                <span className="ml-1 p-1">{item.icon}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar