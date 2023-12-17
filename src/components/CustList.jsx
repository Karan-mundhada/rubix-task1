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
      details: "lorem ipsum dolor sit amet...", // Add more details objects here
      status: "Active",
      date: "2023-12-17",
      contact: {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "+1234567890",
      },
      address: {
        street: "123 Main Street",
        city: "Anytown",
        country: "USA",
      },
      due_date: "2024-01-15",
      payment_method: "Credit Card",
      invoice_details: [
        {
          id: 1,
          description: "Item 1",
          quantity: 2,
          price: "$10.00",
          total: "$20.00",
        },
        {
          id: 2,
          description: "Item 2",
          quantity: 1,
          price: "$50.00",
          total: "$50.00",
        },
      ],
    },
    // Customers here
  ]);
    const [checked, setChecked] = useState(customers);

  const addCustomer = (customer) => {
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
    <div
      className={`flex top-10 h-screen ml-2 mr-2 p-2 fixed ${
        isSidebarOpen ? "w-1/4 left-64" : "w-1/3 left-36"
      }`}
    >
      <div className="flex flex-col h-screen overflow-y-scroll bg-white text-primary px-4">
        <div className="flex justify-between items-center pt-4 pb-2">
          <h1 className="text-xl font-bold">Customers</h1>
          <button
            type="button"
            className={`focus:outline-none px-2 py-1 rounded text-sm bg-primary text-white `}
            onClick={() =>
              addCustomer({ name: "New Customer", amount: "$0.00" })
            }
          >
            + New
          </button>
        </div>
        <ul className="mt-4">
          {customers.map((customer) => (
            <li
              key={customer.name}
              className={`flex justify-between items-center border-b border-gray-700 py-2 px-2 hover:bg-secondary ${
                selectedCustomer === customer ? "bg-white text-primary" : ""
              }`}
              onClick={() => handleCustomerClick(customer)}
            >
              <div className="flex flex-col">
                <p className="text-base font-semibold">{customer.name}</p>
                <p className="text-sm text-gray-400">{customer.amount}</p>
              </div>
              <Checkbox
                edge="end"
                onChange={handleToggle(customer)}
                checked={checked.indexOf(customer) !== -1}
              />
            </li>
          ))}
        </ul>
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        <div className="mt-auto flex justify-end py-2">
          <button
            type="button"
            className="focus:outline-none px-4 py-2 rounded bg-gray-700 text-sm text-white hover:bg-gray-600"
          >
            Export
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustList;
