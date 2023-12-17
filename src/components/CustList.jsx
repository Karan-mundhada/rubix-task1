import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import CustDetails from "./CustDetails";
import CustomerDetails from "./CustomerDetails";

const CustList = ({ isSidebarOpen }) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: "Tata International Limited",
      amount: "$234,868.00",
      details: "lorem ipsum dolor sit amet...",
      status: "Active",
      date: "2023-12-17",
    },
    {
      id: 2,
      name: "HUL ",
      amount: "$2348.00",
      details: "lorem ipsum dolor sit amet...", 
      status: "Active",
      date: "2023-12-17",
    },
    // Customers here
  ]);
  const [checked, setChecked] = useState(customers);

    const addCustomer = (customer) => {
    const maxId = Math.max(...customers.map((c) => c.id), 0);

    customer = { ...customer, id: maxId + 1 };
    setCustomers([...customers, customer]);
  };

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <div className={`flex flex-row mr-2 p-2 mt-4 w-full`}>
      <div className="flex flex-row w-full   text-primary px-4">
        <div className="w-1/3 bg-white p-2 rounded-sm">
          <div className="flex justify-between items-center pt-4 pb-2">
            <div>
              <h1 className="text-xl font-bold">Customers</h1>
              <h6>Active</h6>
            </div>
            <div>
              <button
                type="button"
                className={`focus:outline-none mr-4 py-1 rounded-2xl px-4 text-sm bg-primary text-white `}
                onClick={() =>
                  addCustomer({ name: "New Customer", amount: "$0.00",  })
                }
              >
                + New
              </button>
              <button
                type="button"
                className={`focus:outline-none py-1 border-2 border-violet-700 rounded-2xl px-4 text-sm bg-transparent text-black `}
              >
                Export
              </button>
            </div>
          </div>
          <ul className="mt-4 overflow-y-scroll no-scrollbar">
            {customers.map((customer) => (
              <li
                key={customer.name}
                className={`flex justify-between items-center border-b border-gray-700 py-2 px-2 hover:bg-secondary ${
                  selectedCustomer === customer ? "bg-white text-primary" : ""
                }`}
                onClick={() => handleCustomerClick(customer)}
              >
                <div className="flex flex-row">
                  <div className="bg-violet-300 p-1 px-5 flex justify-center items-center mr-3 rounded-full ">
                    <p className="text-lg text-violet-700 font-semibold">
                      {customer.name[0].toUpperCase()}
                    </p>
                  </div>
                  <div className="flex flex-col ">
                    <p className="text-black text-lg line-clamp-1">
                      {customer.name}
                    </p>
                    <p className="text-black text-gray-400">
                      {customer.amount}
                    </p>
                  </div>
                </div>
                <Checkbox
                  edge="end"
                  onChange={handleToggle(customer)}
                  checked={checked.indexOf(customer) !== -1}
                />
              </li>
            ))}
          </ul>
        </div>
        {selectedCustomer && (
          <CustomerDetails
            className="w-2/3 p-2 bg-white rounded-sm"
            customer={selectedCustomer}
          />
        )}
      </div>
    </div>
  );
};

export default CustList;
