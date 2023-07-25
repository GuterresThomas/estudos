import React, { useState } from 'react';

const StockForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState('');

  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    // Verifica se os campos estão preenchidos antes de enviar para o servidor
    if (itemName && itemPrice && itemQuantity) {
      const newItem = {
        nome: itemName,
        preco: parseFloat(itemPrice),
        quantidade: parseInt(itemQuantity),
      };

      // Envia o novo item para o servidor (usando fetch ou alguma biblioteca de HTTP como axios)
      // Exemplo de uso do fetch:
      fetch('/api/addItemToStock', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newItem),
      })
      .then((response) => response.json())
      .then((data) => {
        console.log('Item adicionado:', data);
        // Limpa o formulário após o envio
        setItemName('');
        setItemPrice('');
        setItemQuantity('');
      })
      .catch((error) => {
        console.error('Erro ao adicionar item:', error);
      });
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div>
      <h2>Adicionar Novo Item no Estoque</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">Nome do Item:</label>
        <input type="text" id="itemName" value={itemName} onChange={(e) => setItemName(e.target.value)} required />

        <label htmlFor="itemPrice">Preço:</label>
        <input type="number" id="itemPrice" step="0.01" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)} required />

        <label htmlFor="itemQuantity">Quantidade:</label>
        <input type="number" id="itemQuantity" value={itemQuantity} onChange={(e) => setItemQuantity(e.target.value)} required />

        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
};

export default StockForm;
