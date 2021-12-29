// 1 - Dada uma matriz, transforme em um array.
const arrays = [["1", "2", "3"], [true], [4, 5, 6]];

function flatten() {
  return arrays.reduce((acc, atual) => acc.concat(atual), []);
}
console.log(flatten());

// Para os exercicios 2, 3, 4 considere o seguinte array:
const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// 2- Crie uma string com os nomes de todas as pessoas autoras.
function reduceNames() {
  const str = books.reduce(
    (list, atual) => `${list} ${atual.author.name}, `,
    ""
  );
  return str;
}
console.log(reduceNames());

// 3- Calcule a média de idade que as pessoas autoras tinham quando seus respectivos
// livros foram lançados.
function averageAge() {
  const lista = books.reduce(
    (acc, actual) => acc + (actual.releaseYear - actual.author.birthYear),
    0
  );
  return lista / books.length;
}
console.log(averageAge());

// 4- Encontre o livro com o maior nome.
function longestNamedBook() {
  const livros = books.reduce((antes, depois) =>
    depois.name.length > antes.name.length ? depois : antes
  );
  return livros.name;
}
console.log(longestNamedBook());

// 5- Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a
// maiúscula ou minúscula.
const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

function containsA() {
  return names.reduce(
    (soma, atual) =>
      soma +
      atual
        .toLowerCase()
        .split("")
        .reduce((acc, atual2) => (atual2 === "a" ? acc + 1 : acc), 0),
    0
  );
}

console.log(containsA());

/* 6- Agora vamos criar um novo array de objetos a partir das informações abaixo, onde 
cada objeto terá o formato {name: nome do aluno, average: media das notas}. Para isso 
vamos assumir que a posição 0 de notas refere-se ao aluno na posição 0 de alunos, aqui 
além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o 
index do array dentro de map, e você pode ver o objeto esperado na constante expected.*/
const students = ["Pedro Henrique", "Miguel", "Maria Clara"];
const grades = [
  [9, 8, 10, 7, 5],
  [10, 9, 9, 10, 8],
  [10, 7, 10, 8, 9],
];

function studentAverage() {
  return students.map((estudante, index) => ({
    name: estudante,
    average:
      grades[index].reduce((media, nota) => media + nota, 0) /
      grades[index].length,
  }));
}
console.log(studentAverage());
