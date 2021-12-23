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

// Adicione o código do exercício aqui:

/* 1- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.
Dica: use a função find .*/
function authorBornIn1947() {
  return books.find((x) => x.author.birthYear === 1947);
}
console.log(authorBornIn1947());

//2 - Retorne o nome do livro de menor nome.
function smallerName() {
  let nameBook = books[0].name;
  books.forEach((element) => {
    element.name.length < nameBook.length
      ? (nameBook = element.name)
      : nameBook;
  });
  return nameBook;
}
console.log(smallerName());

//3 - Encontre o primeiro livro cujo nome possui 26 caracteres.
function getNamedBook() {
  const resultado = books.find((x) => x.name.length === 26);
  return resultado;
}
console.log(getNamedBook());

// 4- Ordene os livros por data de lançamento em ordem decrescente.
function booksOrderedByReleaseYearDesc() {
  const ordemData = books.sort((a, b) => b.releaseYear - a.releaseYear);
  return ordemData;
}
console.log(booksOrderedByReleaseYearDesc());

//5 - Faça uma função que retorne true , se todas as pessoas autoras nasceram no
//século XX, ou false , caso contrário.
function everyoneWasBornOnSecXX() {
  const seculoNascimento = books.every(
    (pessoas) => pessoas.author.birthYear < 2000
  );
  return seculoNascimento;
}
console.log(everyoneWasBornOnSecXX());

// 6- Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false , caso contrário.
function someBookWasReleaseOnThe80s() {
  const decada = books.some(
    (x) => x.releaseYear < 1990 && x.releaseYear >= 1980
  );
  return decada;
}
console.log(someBookWasReleaseOnThe80s());

// 7- Faça uma função que retorne true, caso nenhum autor tenha nascido no mesmo ano, e false , caso contrário.
function authorUnique() {
  const birthSame = books.some((x) =>
    books.some((y) => y.author.birthYear === x.author.birthYear && y.author.name !== x.author.name )
  );
  return !birthSame
}
console.log(authorUnique());
