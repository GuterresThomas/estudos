// src/stock.model.ts
import { Schema, model, Document } from 'mongoose';

// Interface para tipagem do documento
interface IStock extends Document {
  nome: string;
  preco: number;
  quantidade: number;
}

// Definição do Schema
const stockSchema = new Schema<IStock>({
  nome: { type: String, required: true },
  preco: { type: Number, required: true },
  quantidade: { type: Number, required: true },
});

// Criar e exportar o modelo
export default model<IStock>('Stock', stockSchema);
