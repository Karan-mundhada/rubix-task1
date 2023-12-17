import React from 'react';

const CustomerDetails = ({ customer }) => (
  <div className="px-4 py-2 top-10 left-1/2 flex">
    <div className="flex justify-between items-center mb-4">
      <h2 className="tex t-base font-semibold">{customer.name}</h2>
      <div className="flex items-center space-x-2">
        <div className={`bg-${customer.status === 'Active' ? 'primary' : 'gray'} text-white px-2 py-1 rounded-full text-sm`}>{customer.status}</div>
        <span className="text-gray-400 text-sm">{customer.date}</span>
      </div>
    </div>
    <div className="flex flex-row space-x-4 mb-4">
      <div className="flex flex-col w-1/2">
        <p className="text-sm font-semibold">Contact</p>
        <p className="text-xs text-gray-400">{customer.contact.name}</p>
        <p className="text-xs text-gray-400">{customer.contact.email}</p>
        <p className="text-xs text-gray-400">{customer.contact.phone}</p>
      </div>
      <div className="flex flex-col w-1/2">
        <p className="text-sm font-semibold">Address</p>
        <p className="text-xs text-gray-400">{customer.address.street}</p>
        <p className="text-xs text-gray-400">{customer.address.city}</p>
        <p className="text-xs text-gray-400">{customer.address.country}</p>
      </div>
    </div>
    <div className="flex flex-col space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">Amount</p>
        <p className="text-sm font-semibold text-accent">{customer.amount}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">Due Date</p>
        <p className="text-sm text-gray-400">{customer.due_date}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-sm font-semibold">Payment Method</p>
        <p className="text-sm text-gray-400">{customer.payment_method}</p>
      </div>
      <div className="border-b border-light-gray pb-2">
        <p className="text-sm font-semibold">Invoice Details</p>
        <table className="text-xs text-gray-400 mt-2 w-full">
          <thead>
            <tr>
              <th className="px-2 py-1">#</th>
              <th className="px-2 py-1">Description</th>
              <th className="px-2 py-1">Quantity</th>
              <th className="px-2 py-1">Price</th>
              <th className="px-2 py-1">Total</th>
            </tr>
          </thead>
          <tbody>
            {customer.invoice_details.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-1">{item.id}</td>
                <td className="px-2 py-1">{item.description}</td>
                <td className="px-2 py-1">{item.quantity}</td>
                <td className="px-2 py-1">{item.price}</td>
                <td className="px-2 py-1">{item.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          className="focus:outline-none px-4 py-2 rounded bg-gray-500 text-white mr-2 hover:bg-gray-600"
        >
          Button 1 Text
        </button>
        {/* Button 2 - Empty placeholder */}
        <button
          type="button"
          className="focus:outline-none px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600"
        >
          Button 2 Text
        </button>
      </div>
    </div>
  </div>
);

export default CustomerDetails;