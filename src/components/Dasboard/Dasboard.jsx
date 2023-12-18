import React from 'react';
import CustList from "./CustList";


const Dasboard = ({isSidebarOpen}) => {
  return (
    <>
      <CustList isSidebarOpen={isSidebarOpen} />
    </>
  );
}

export default Dasboard