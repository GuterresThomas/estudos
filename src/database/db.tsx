import mongoose, { ConnectOptions } from 'mongoose';

// URL de conexão com o MongoDB
const dbURI = 'mongodb+srv://erpotica:<SCRNTrg2T6B6FD9l>@erp.lco4s5w.mongodb.net/';

// Opções de conexão do mongoose
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true,
};

// Função para conectar ao MongoDB
export const connectDB = async (): Promise<void> => {
  try {
    await mongoose.connect(dbURI, options );
    console.log('Conexão ao MongoDB estabelecida com sucesso.');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
  }
};