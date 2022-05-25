const Cep = require("../services/Cep");
const rescue = require('express-rescue');

const ping = async (req, res) => {
  res.status(200).json({ message: "pong!" });
};

const findCep = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const cepData = await Cep.findCep(cep);
  if (cepData.error) {
    return next(cepData.error);
  }
  res.status(200).json(cepData);
});

module.exports = {
  ping,
  findCep,
};
