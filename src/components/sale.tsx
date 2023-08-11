'use client'
import React, { useState, useEffect } from 'react';

const SalesApp = () => {
  const [sales, setSales] = useState([]);
  const [newSale, setNewSale] = useState({ date: '', customer_id: '', total_amount: 0 });

  const fetchSales = async () => {
    const response = await fetch('http://localhost:3000/sales');
    const data = await response.json();
    setSales(data);
  };

  const addSale = async () => {
    const response = await fetch('http://localhost:3000/sales', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newSale),
    });
    if (response.status === 201) {
      setNewSale({ date: '', customer_id: '', total_amount: 0 });
      fetchSales();
    }
  };

  useEffect(() => {
    fetchSales();
  }, []);

  return (
    <div className="flex justify-center mt-10 font-sans-Roboto">
      <div className="">
        <h1 className="font-bold">Lista de Vendas</h1>
        <ul className="space-y-2 m-4 p-4">
          {sales.map((sale) => (
            <li key={sale.id}>
              Data: {sale.date} - Cliente ID: {sale.customer_id} - Total: {sale.total_amount}
            </li>
          ))}
        </ul>
        <h2 className="font-bold">Adicionar Nova Venda:</h2>
        <div className="flex justify-center">
        <label>
            Data:
            <input
              type="datetime-local"
              value={newSale.date}
              onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
            />
          </label>
          <label>
            Cliente ID:
            <input
              type="number"
              value={newSale.customer_id}
              onChange={(e) => setNewSale({ ...newSale, customer_id: parseInt(e.target.value) })}
            />
          </label>
          <label>
            Total:
            <input
              type="number"
              step="0.01"
              value={newSale.total_amount}
              onChange={(e) => setNewSale({ ...newSale, total_amount: parseFloat(e.target.value) })}
            />
          </label>
        </div>
        <button className="bg-zinc-500 p-1 m-1 rounded-full font-bold text-sm text-zinc-50 hover:bg-zinc-800 " onClick={addSale}>Adicionar Venda</button>    
      </div>
    </div>
  );
};

export default SalesApp;
