/* Crie uma função que receba um número e retorne seu fatorial.
Na matemática, o fatorial de um número não negativo N , com a notação N!, é o produto 
de todos os inteiros menores ou iguais a N . Exemplo: 4! = 4 * 3 * 2 * 1 = 24. */

const fatorial = (n) => {
  let fat = 1;
  for (let i = 1; i <= n; i += 1) {
    fat *= i;
  }
  return fat;
};

console.log(fatorial(4));

// Crie uma função que receba uma frase e retorne qual a maior palavra.
const longestWord = (string) => {
  string = string.split(" ");
  let maior = "";
  for (let x = string.length - 1; x >= 0; x -= 1) {
    if (string[x].length > maior.length) {
      maior = string[x];
    }
  }
  return maior;
};

console.log(
  longestWord(
    "Antônio foi no banheiro e não sabemos o que aconteceu"
  )
); // retorna 'aconteceu'
