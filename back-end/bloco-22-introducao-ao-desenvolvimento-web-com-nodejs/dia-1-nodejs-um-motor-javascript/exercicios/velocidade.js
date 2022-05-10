const { questionInt } = require("readline-sync");
const distancia = questionInt("Qual distancia em metros? ");
const tempo = questionInt("Quantos segundos? ");
const velocidade = distancia / tempo;
console.log(Math.round(velocidade*3.6) + ' Km/h')