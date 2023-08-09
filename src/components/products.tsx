'use client'


import React, { useState, useEffect } from 'react';

const StoragesApp = () => {
  const [storages, setStorages] = useState([]);
  const [newStorage, setNewStorage] = useState({ name: '', price: 0, quantity: 0 });

  const fetchStorages = async () => {
    const response = await fetch('http://localhost:3000/storages');
    const data = await response.json();
    setStorages(data);
  };

  const addStorage = async () => {
    const response = await fetch('http://localhost:3000/storages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStorage),
    });
    if (response.status === 201) {
      setNewStorage({ name: '', price: 0, quantity: 0 });
      fetchStorages();
    }
  };

  const deleteStorage = async (id) => {
    const response = await fetch(`http://localhost:3000/storages/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 204) {
      fetchStorages();
    }
  };

  useEffect(() => {
    fetchStorages();
  }, []);

  return (
    <div className="flex justify-center mt-10 font-sans-Roboto">
      <div className="">
        <h1 className="font-bold">Lista de Estoque</h1>
        <ul className="space-y-2 m-4 p-4">
          {storages.map((storage) => (
            <li key={storage.id}>
              {storage.name} - R${parseFloat(storage.price).toFixed(2)} - Quantidade: {storage.quantity}
              <button className="bg-zinc-500 p-1 m-1 rounded-full font-bold text-sm text-zinc-50 hover:bg-zinc-800 " onClick={() => deleteStorage(storage.id)}>Excluir</button>
            </li>
          ))}
        </ul>
        <h2 className="font-bold">Adicionar Novo Produto ao Estoque:</h2>
        <div className="flex justify-center">
            <label htmlFor="Nome">
                <p className="text-sm font-sans-Roboto font-semibold ml-3">Nome:</p>
                <input
                  className="m-2 bg-zinc-300 p-1 rounded-2xl"
                  type="text"
                  placeholder="Nome"
                  value={newStorage.name}
                  onChange={(e) => setNewStorage({ ...newStorage, name: e.target.value })}
                />
            </label>
            <label htmlFor="Nome">
              <p className="text-sm font-sans-Roboto font-semibold ml-3">Preço:</p>  
              <input
                className="m-2 bg-zinc-300 p-1 rounded-2xl"
                type="number"
                placeholder="Preço"
                value={newStorage.price}
                onChange={(e) =>
                  setNewStorage({ ...newStorage, price: parseFloat(e.target.value) })
                }
              />
            </label>
            <label htmlFor="Nome">
              <p className="text-sm font-sans-Roboto font-semibold ml-3">Quantidade:</p>  
              <input
                className="m-2 bg-zinc-300 p-1 rounded-2xl"
                type="number"
                placeholder="Quantidade"
                value={newStorage.quantity}
                onChange={(e) =>
                  setNewStorage({ ...newStorage, quantity: parseInt(e.target.value) })
                }
              />
            </label>
            </div>
            <button className="bg-zinc-500 p-1 m-1 rounded-full font-bold text-sm text-zinc-50 hover:bg-zinc-800 " onClick={addStorage}>Adicionar</button>    
          
        </div>
    </div>
  );
};

export default StoragesApp;
