/* Agora, para praticar, crie uma função que receba três parâmetros, sendo eles: 
um objeto, o nome de uma chave e o seu valor. O retorno dessa função deve ser 
o objeto já com a nova chave adicionada nele. */
const obj = {
  firstName: "Roberto",
  age: 22,
  job: "Teacher",
};
const newKey = (objeto, chave, valor) => {
  objeto[chave] = valor;
  return objeto;
};

newKey(obj, "Sobrenome", "Andrade");
console.log(obj);

//"Nome da habilidade, Nível: valor da chave referente à habilidade".
const student1 = {
  Html: "Muito Bom",
  Css: "Bom",
  JavaScript: "Ótimo",
  SoftSkills: "Ótimo",
};

const student2 = {
  Html: "Bom",
  Css: "Ótimo",
  JavaScript: "Ruim",
  SoftSkills: "Ótimo",
  Git: "Bom", // chave adicionada
};

/*  for (let x in student2){
      console.log(`${x}, Nivel: ${student2[x]}`)
  } */

console.log(Object.values(student2));

const person = {
  name: "Roberto",
};

const lastName = {
  lastName: "Silva",
};

const newPerson = Object.assign({}, person, lastName);
newPerson.name = "Gilberto";
console.log(newPerson);
console.log(person);
