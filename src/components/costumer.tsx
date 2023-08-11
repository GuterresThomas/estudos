'use client'

import React, { useState, useEffect } from 'react';

const CustomersApp = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });

  const fetchCustomers = async () => {
    const response = await fetch('http://localhost:3000/customers');
    const data = await response.json();
    setCustomers(data);
  };

  const addCustomer = async () => {
    const response = await fetch('http://localhost:3000/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCustomer),
    });
    if (response.status === 201) {
      setNewCustomer({ name: '', email: '' });
      fetchCustomers();
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  return (
    <div className="flex justify-center mt-10 font-sans-Roboto">
      <div className="">
        <h1 className="font-bold">Lista de Clientes</h1>
        <ul className="space-y-2 m-4 p-4">
            {customers.map((customer) => (
            <li key={customer.id}>
                Nome: {customer.name} - Email: {customer.email}
            </li>
            ))}
        </ul>
        <h2 className="font-bold">Adicionar Novo Cliente:</h2>
        <div className="flex justify-center">
          <label>
            Nome:
            <input
              type="text"
              value={newCustomer.name}
              onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={newCustomer.email}
              onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
            />
          </label>
          <button className="bg-zinc-500 p-1 m-1 rounded-full font-bold text-sm text-zinc-50 hover:bg-zinc-800 " onClick={addCustomer}>Adicionar Cliente</button>
        </div>
      </div>
    </div>
  );
};

export default CustomersApp;
