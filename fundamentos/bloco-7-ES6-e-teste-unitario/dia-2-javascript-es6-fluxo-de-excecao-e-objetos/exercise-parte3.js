const lesson1 = {
  materia: "Matemática",
  numeroEstudantes: 20,
  professor: "Maria Clara",
  turno: "manhã",
};

const lesson2 = {
  materia: "História",
  numeroEstudantes: 20,
  professor: "Carlos",
};

const lesson3 = {
  materia: "Matemática",
  numeroEstudantes: 10,
  professor: "Maria Clara",
  turno: "noite",
};

// Crie uma função para adicionar o turno da noite na lesson2 . Essa função deve
// possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que
// deverá ser adicionada e o valor dela.

const addTurn = (obj, key, value) => {
  obj[key] = value;
};
addTurn(lesson2, "turno", "noite");
console.log(lesson2);

/* Crie uma função para listar as keys de um objeto. Essa função deve receber 
  um objeto como parâmetro. */
const listKey = (obj) => {
  console.log(Object.keys(obj));
};
listKey(lesson2);

// Crie uma função para mostrar o tamanho de um objeto.
const tamObj = (obj) => {
  console.log(Object.keys(obj).length);
};
tamObj(lesson2);

//Crie uma função para listar os valores de um objeto. Essa função deve receber
//um objeto como parâmetro.
const listValue = (obj) => {
  console.log(Object.values(obj));
};
listValue(lesson2);

/* Crie um objeto de nome allLessons , que deve agrupar todas as aulas através do 
Object.assign . Cada chave desse novo objeto será uma aula, sendo essas 
chaves: lesson1 , lesson2 e lesson3 */
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

/* Usando o objeto criado no exercício 5, crie uma função que retorne 
o número total de estudantes em todas as aulas. */
let total = 0;
let array = Object.keys(allLessons);
for (let x in array) {
  total += allLessons[array[x]].numeroEstudantes;
}
console.log(total);

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:
const getValueByNumber = (obj, position) => {
  const array = Object.keys(obj);
  return obj[array[position]];
};
console.log(getValueByNumber(lesson1, 0));

/* Crie uma função que verifique se o par (chave / valor) existe na função. 
Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da 
chave e o valor da chave. Exemplo: */
const verifyPair = (obj, key, value) => {
  return obj[key] === value;
};

console.log(verifyPair(lesson3, "turno", "noite"));
// Output: true,
console.log(verifyPair(lesson3, "materia", "Maria Clara"));
// Output: false

// Crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
let soma = 0;
for (let i in array) {
  if (allLessons[array[i]].materia === "Matemática") {
    soma += allLessons[array[i]]["numeroEstudantes"];
  }
}
console.log(soma);

/* Crie uma função que deverá retornar um objeto que representa o relatório do 
professor, as aulas que ele ou ela ministrou e o número total de estudantes. */
const createReport = (obj, prof) => {
  const allLess = [];
  let allStudent = 0;
  for (let i in array) {
    if (obj[array[i]].professor === prof) {
      allLess.push(obj[array[i]].materia);
      allStudent += obj[array[i]].numeroEstudantes;
    }
  }
  return {Professor: prof, lessons: allLess, estudantes: allStudent };
};

console.log(createReport(allLessons, "Maria Clara"));
/* {
  professor: 'Maria Clara',
  aulas: [ 'Matemática', 'Matemática' ],
  estudantes: 30
} */
