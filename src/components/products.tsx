'use client'


import React, { useState, useEffect } from 'react';

const ProductsApp = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: 0 });

  const fetchProducts = async () => {
    const response = await fetch('http://localhost:3000/products');
    const data = await response.json();
    setProducts(data);
  };

  const addProduct = async () => {
    const response = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newProduct),
    });
    if (response.status === 201) {
      setNewProduct({ name: '', price: 0 });
      fetchProducts();
    }
  };

  const deleteProduct = async (id) => {
    const response = await fetch(`http://localhost:3000/products/${id}`, {
      method: 'DELETE',
    });
    if (response.status === 204) {
      fetchProducts();
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex justify-center mt-10 font-sans-Roboto ">
        <div className="">
            <h1 className="font-bold">Lista de Produtos</h1>
            <ul className="space-y-2  m-4 p-4 ">
                {products.map((product) => (
                <li key={product.id}>
                    {product.name} - R${product.price.toFixed(2)}
                    <button className="bg-zinc-500 p-1 m-1 rounded-full font-bold text-sm text-zinc-50 hover:bg-zinc-800 " onClick={() => deleteProduct(product.id)}>Excluir</button>
                </li>
                ))}
            </ul>
            <h2 className="font-bold">Adicionar Novo Produto</h2>
            <input
                className="m-2 bg-zinc-300 p-1 rounded-2xl"
                type="text"
                placeholder="Nome"
                value={newProduct.name}
                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
            <input
                className="m-2 bg-zinc-300 p-1 rounded-2xl"
                type="number"
                placeholder="Preço"
                value={newProduct.price}
                onChange={(e) =>
                setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })
                }
            />
            <button className="bg-zinc-500 p-1 m-1 rounded-full font-bold text-sm text-zinc-50 hover:bg-zinc-800 " onClick={addProduct}>Adicionar</button>
        </div>
    </div>
  );
};

export default ProductsApp;
