import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import cadastroRoutes from "./routes/authRoutes.js";
import multer from 'multer' // adicione esta linha no topo

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.resolve("uploads"))); // servir PDFs
app.use("/api/cadastro", cadastroRoutes);

// handler para rotas inválidas (opcional)
app.use((req, res) => {
  res.status(404).json({ message: 'Rota não encontrada' });
});

// middleware de tratamento de erros (captura erros do multer e outros)
app.use((err, req, res, next) => {
  console.error('Erro global:', err && (err.stack || err.message || err));
  // erro explícito do multer
  if (err && (err.name === 'MulterError' || err.code === 'LIMIT_FILE_SIZE')) {
    return res.status(400).json({ message: err.message || 'Erro no upload' });
  }
  // erro criado no fileFilter (ex: "Apenas PDFs são aceitos")
  if (err && err.message) {
    return res.status(400).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Erro interno do servidor' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

