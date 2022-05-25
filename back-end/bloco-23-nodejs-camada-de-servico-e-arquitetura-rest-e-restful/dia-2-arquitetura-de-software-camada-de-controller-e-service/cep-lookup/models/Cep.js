const connection = require("./connection");

const findCep = async (cep) => {
  const query = `
    SELECT *
    FROM cep_lookup.ceps 
    WHERE cep = ?
  `;

  const [cepData] = await connection.execute(query, [cep]);

  if (cepData.length === 0) return null;

  return cepData;
};

module.exports = {
  findCep,
};
