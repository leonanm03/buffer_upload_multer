import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { filesCollection } from "./config/config.js";
dotenv.config();

const port = process.env.PORT || 5000;

const server = express();
server.use(cors());
server.use(express.json());

// Rota para listar todos os arquivos
const upload = multer({ dest: "uploads/" });

//upload.single("file") - o nome do campo do formulário que será enviado
server.post("/server/upload", upload.single("file"), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      const error = new Error("Por favor, envie um arquivo");
      error.httpStatusCode = 400;
      return next(error);
    }

    filesCollection.insertOne(file);

    res.status(200).send({ message: "Arquivo enviado com sucesso" });
  } catch (error) {
    res.status(500).send({ message: "Erro ao enviar arquivo" });
  }
});

server.listen(
  port,
  console.log(`Servidor iniciado com sucesso! Na porta: ${port}`)
);
