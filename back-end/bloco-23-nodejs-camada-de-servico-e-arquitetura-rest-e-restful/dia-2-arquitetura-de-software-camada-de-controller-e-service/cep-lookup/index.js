const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const Cep = require('./controllers/Cep');
const errorMiddleware = require('./middlewares/error.js');


const app = express();

app.use(bodyParser.json());


app.get('/ping', Cep.ping )

app.get('/cep/:cep', Cep.findCep);
app.use(errorMiddleware);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
