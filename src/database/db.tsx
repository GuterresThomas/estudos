//

import mongoose, { ConnectOptions } from 'mongoose';

// URL de conexão com o MongoDB
const dbURI = 'mongodb+srv://erpotica:<SCRNTrg2T6B6FD9l>@erp.lco4s5w.mongodb.net/';

// Opções de conexão do mongoose
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

// Função para conectar ao MongoDB
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURI, );
    console.log('Conexão ao MongoDB estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};