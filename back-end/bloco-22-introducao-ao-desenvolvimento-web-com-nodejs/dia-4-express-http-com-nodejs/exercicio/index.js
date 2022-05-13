const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.get("/ping", function (req, res) {
  res.status(200).json({ message: "Pong" });
});

app.post("/hello", function (req, res) {
    const { name } = req.body;
  res.status(201).json({ message: `Hello, ${name}` });
});

app.post("/greetings", function (req, res) {
    const { name, age } = req.body;
    if (age < 17) return res.status(401).json({ message: `Unauthorized` });
  res.status(200).json({ message: `Hello, ${name}` });
});


app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
