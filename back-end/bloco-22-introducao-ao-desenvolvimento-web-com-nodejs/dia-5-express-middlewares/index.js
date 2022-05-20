const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const validUser = {
  username: 'MestreCuca',
  password: 'MinhaSenhaSuperSeguraSqn'
};

const authMiddleware = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({ message: 'Username or password can`t be blank!' });
  }

  if (username !== validUser.username || password !== validUser.password) {
    return res.status(401).json({ message: 'Invalid credentials!' });
  }

  next();
};

app.get('/open', function (req, res) {
  res.send('open!')
});

const recipes = [
  { id: 1, name: "Lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com molho branco", price: 35.0, waitTime: 25 },
];

function validateName(req, res, next) {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: "Invalid data!" });
  next();
}

function validateprice(req, res, next) {
  const { price } = req.body;
  if (typeof price !== "number" || price < 0)
    return res.status(400).json({ message: "Invalid data!" });
  next();
}

app.use(authMiddleware);


app.post("/recipes", validateName, validateprice, function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price });
  res.status(201).json({ message: "Recipe created successfully!" });
});

app.put("/recipes/:id", validateName, validateprice, function (req, res) {
  const { id } = req.params;
  const { name, price } = req.body;
  const recipesIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipesIndex === -1)
    return res.status(404).json({ message: "Recipe not found!" });

  recipes[recipesIndex] = { ...recipes[recipesIndex], name, price };

  res.status(204).end();
});

app.listen(3001, () => {
  console.log("Aplicação ouvindo na porta 3001");
});
