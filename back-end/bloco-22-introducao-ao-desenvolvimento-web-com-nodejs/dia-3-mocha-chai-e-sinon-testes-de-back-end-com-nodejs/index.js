const poloFind = (num) =>
  (typeof num !== 'number'
    ? "Is not a number"
    : num === 0
    ? "Neutro"
    : num > 0
    ? "Positivo"
    : "Negativo");

module.exports = poloFind;
