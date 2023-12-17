import React, { useState } from "react";
import CustomerDetails from "./CustomerDetails"; // Import details component

const CustomerList = ({isSidebarOpen}) => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [customers] = useState([
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
        // Add more invoice details objects here
      ],
    },
    {
      id: 2,
      name: "UNG",
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
        // Add more invoice details objects here
      ],
    },
    // Add more customer objects with details
  ]);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

    return (
      <div
        className={`flex top-10 h-screen ml-2 mr-2 p-2 fixed ${
          isSidebarOpen ? "w-1/4 left-64" : "w-1/3 left-36"
        }`}
      >
        <div className="flex flex-col h-screen overflow-y-scroll px-4">
          <div className="flex justify-between items-center pt-4 pb-2">
            <h1 className="text-xl font-bold">Customers</h1>
            <button
              type="button"
              className="focus:outline-none px-2 py-1 rounded bg-gray-700 text-sm text-white hover:bg-primary"
            >
              + New
            </button>
          </div>
          <ul className="mt-4">
            {customers.map((customer) => (
              <li
                key={customer.id}
                className={`flex justify-between items-center border-b border-gray-700 py-2 px-2 hover:bg-primary cursor-pointer ${
                  selectedCustomer === customer ? "bg-primary text-white" : ""
                }`}
                onClick={() => handleCustomerClick(customer)}
              >
                <div className="flex flex-col">
                  <p className="text-base font-semibold">{customer.name}</p>
                  <p className="text-sm text-gray-400">{customer.amount}</p>
                </div>
                <button
                  type="button"
                  className="focus:outline-none px-2 py-1 rounded bg-gray-500 text-sm text-white hover:bg-gray-600"
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        </div>
      </div>
    );
};

export default CustomerList;