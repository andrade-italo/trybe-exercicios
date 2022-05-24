const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
const Users = require('./models/Users');
// const Books = require('./models/Books');

app.post("/users", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  if (!Users.isValid(firstName, lastName, email, password))  {
    return res.status(400).json({
      error: true,
      message: "Dados invalidos",
    });
  }

  await Author.create(firstName, lastName, email, password);

  res.status(201).json({
    firstName, lastName, email
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
