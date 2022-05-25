const Cep = require("../models/Cep");

const isValid = (cep) => {
  if (!cep) return false;
  if (!cep.match(/\d{5}-?\d{3}/)) return false;
  const tratedCep = cep.replace('-', '');

  return tratedCep;
};

const findCep = async (cep) => {
  const validCep = isValid(cep);
  if (!validCep) {
    return {
      error: {
        code: "invalidData",
        message: "CEP inválido",
      },
    };
  }
  const cepData = await Cep.findCep(validCep);
  if (!cepData)
    return { error: { code: "notFound", message: "CEP não encontrado" } };

  return cepData;
};

module.exports = {
  findCep,
};
