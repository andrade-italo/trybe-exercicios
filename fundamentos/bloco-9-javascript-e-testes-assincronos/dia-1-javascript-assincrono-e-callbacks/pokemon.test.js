// Verifique se a importação do arquivo correto está sendo feita.
const {
  getPokemonDetails,
} = require("../dia-1-javascript-assincrono-e-callbacks/pokemon");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error("Não temos esse pokémon para você :(");
    const callback = (error, result) => {
      expect(error).toEqual(expectedError);
      done();
    };
    getPokemonDetails(({ name }) => name === "Squirte", callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedString =
      "Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember";
    const fail = (error, sucess) => {
      expect(sucess).toEqual(expectedString);
      done();
    };
    getPokemonDetails(({ name }) => name === "Charmander", fail);
  });
});
