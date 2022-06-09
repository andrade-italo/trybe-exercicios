const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

const BooksController = require("./controllers/BooksController"); // importamos o controller aqui

app.use(express.json());
app.get("/books", BooksController.getAll);
app.get("/books/:id", BooksController.getById);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));
