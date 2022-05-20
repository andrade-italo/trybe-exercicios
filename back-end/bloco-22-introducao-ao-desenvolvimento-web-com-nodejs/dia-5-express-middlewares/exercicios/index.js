const express = require("express");
const bodyParser = require("body-parser");
const rescue = require('express-rescue');

const app = express();
app.use(bodyParser.json());

const crypto = require("crypto");

function generateToken() {
  return crypto.randomBytes(8).toString("hex");
}

const authFunction = rescue((req, res, next) => {
      const { authorization } = req.headers;
      if (!authorization || authorization.length !== 16) {
        return res.status(401).json({ message: 'Token inválido!' });
      }
      return next();
})

const productNameValidation = (req, res, next) => {
  const { productName } = req.body;
  if (!productName)
    return res
      .status(400)
      .json({ message: "O campo productName é obrigatório" });
  if (productName.length <= 4)
    return res.status(400).json({
      message: "O campo productName deve ter pelo menos 4 caracteres",
    });
  next();
};

const saleDateValidate = (req, res, next) => {
  const { infos } = req.body;
  if (!infos.saleDate)
    return res.status(400).json({
      message: "O campo saleDate é obrigatório",
    });
  const dateRegex =
    /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
  if (!dateRegex.match(saleDate)) {
    return res
      .status(400)
      .json({ message: "O campo saleDate não é uma data válida" });
  }
  next();
};

const warrantyPeriodValidate = (req, res, next) => {
  const { infos } = req.body;
  if (!infos.warrantyPeriod)
    return res.status(400).json({
      message: "O campo warrantyPeriod é obrigatório",
    });

  if (warrantyPeriod > 3 || warrantyPeriod < 1)
    return res.status(400).json({
      message: "O campo warrantyPeriod precisa estar entre 1 e 3",
    });
  next();
};

const infoValidate = (req, res, next) => {
  const { infos } = req.body;
  if (!infos)
    return res.status(400).json({
      message: "O campo infos é obrigatorio",
    });
};

app.post("/signup", rescue((req, res) => {
  const { email, password, firstName, phone } = req.body;
  if (!email || !password || !firstName || !phone)
    return res.status(401).json({
      message: "missing fields",
    });
  const token = generateToken(8).toString('hex');
  return res.status(200).json({ token });
}));
app.use((err, req, res, next) => {
  res.status(500).json({ error: `Erro: ${err.message}` });
});


app.post(
  "/sales",
  authFunction,
  infoValidate,
  productNameValidation,
  saleDateValidate,
  warrantyPeriodValidate,
  function (req, res) {
    const { productName, infos } = req.body;
    res.status(201).json({ message: "Sale created successfully!" });
  }
);

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
