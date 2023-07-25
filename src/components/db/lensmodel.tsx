import '../../database/db'; // Importa e executa o código de conexão com o MongoDB
import Stock from '../../schemas/lens';

async function CreateLens() {
  try {
    // Criar um item de estoque de exemplo
    const newStockItem = await Stock.create({
      nome: 'Produto de Exemplo',
      preco: 19.99,
      quantidade: 100,
    });

    console.log('Item de estoque criado:', newStockItem);
  } catch (error) {
    console.error('Erro ao criar o item de estoque:', error);
  }
}

export default CreateLens


