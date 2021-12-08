/*const oddsAndEvens = [13, 3, 4, 10, 7, 2];
const orderNumber = (oddsAndEvens) => {
  for (let x = oddsAndEvens.length - 1; x >= 0; x -= 1) {
    for (let i = oddsAndEvens.length - 1; i > 0; i -= 1) {
      if (oddsAndEvens[i] > oddsAndEvens[x]) {
        oddsAndEvens.splice(i, 0, oddsAndEvens.splice(x, 1)[0]);
      }
    }
  }
  return oddsAndEvens.reverse();
}
console.log(
  `Os números ${orderNumber(
    oddsAndEvens
  )} se encontram ordenados de forma crescente!`
);
*/
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente !`);