const { questionFloat } = require("readline-sync");
const imc = (peso, altura) => peso / altura ** 2;

const peso = questionFloat("Qual seu peso? ");
const altura = questionFloat("Qual é sua altura? ");

const imcParam = {
  "Abaixo do peso (magreza)": {
    imcMaximo: 18.5,
  },
  "Peso normal": {
    imcMinimo: 18.5,
    imcMaximo: 24.9,
  },
  "Acima do peso (sobrepeso)": {
    imcMinimo: 25,
    imcMaximo: 29.9,
  },
  "Obesidade grau I": {
    imcMinimo: 30,
    imcMaximo: 34.9,
  },
  "Obesidade grau II": {
    imcMinimo: 35,
    imcMaximo: 39.9,
  },
  "Obesidade graus III e IV": {
    imcMinimo: 40,
  },
};

const teste = imc(peso, altura);
const final = Object.values(imcParam).findIndex(
  ({ imcMinimo, imcMaximo }) =>
    (imcMinimo ? teste > imcMinimo : true) &&
    (imcMaximo ? teste < imcMaximo : true)
);

const resultado = Object.keys(imcParam)[final]

module.exports = resultado;