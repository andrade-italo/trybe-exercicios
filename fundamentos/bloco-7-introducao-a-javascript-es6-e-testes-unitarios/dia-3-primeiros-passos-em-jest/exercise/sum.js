function sum(a, b) {
  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("parameters must be numbers");
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== "number") return false;
  if (num % 3 === 0 && num % 5 === 0) return "fizzbuzz";
  if (num % 3 === 0) return "fizz";
  if (num % 5 === 0) return "buzz";
  return num;
}

// Desafio 9
function encode(str) {
  for (let x in str) {
    str = str.replace("a", 1);
    str = str.replace("e", 2);
    str = str.replace("i", 3);
    str = str.replace("o", 4);
    str = str.replace("u", 5);
  }
  return str;
}

function decode(str) {
  for (let x in str) {
    str = str.replace(1, "a");
    str = str.replace(2, "e");
    str = str.replace(3, "i");
    str = str.replace(4, "o");
    str = str.replace(5, "u");
  }
  return str;
}

function techList(lista, nome) {
  lista.sort();
  let newList = [];
  for (let x of lista) {
    newList.push({ tech: x, name: nome });
  }
  if (newList.length === 0) {
    return "Vazio!";
  } else {
    return newList;
  }
}

function hydrate(lista) {
  lista = lista.replace(" e ", ", ");
  let newList = lista.split(",");
  let soma = 0;
  for (let x of newList) {
    soma += parseInt(x);
  }
  if (soma === 1) {
    return `${soma} copo de água`;
  } else {
    return `${soma} copos de água`;
  }
}

// Dados
const professionalBoard = [
  {
    id: "8579-6",
    firstName: "Ana",
    lastName: "Gates",
    specialities: ["UX", "Design"],
  },
  {
    id: "5569-4",
    firstName: "George",
    lastName: "Jobs",
    specialities: ["Frontend", "Redux", "React", "CSS"],
  },
  {
    id: "4456-4",
    firstName: "Leila",
    lastName: "Zuckerberg",
    specialities: ["Context API", "RTL", "Bootstrap"],
  },
  {
    id: "1256-4",
    firstName: "Linda",
    lastName: "Bezos",
    specialities: ["Hooks", "Context API", "Tailwind CSS"],
  },
  {
    id: "9852-2-2",
    firstName: "Jeff",
    lastName: "Cook",
    specialities: ["Ruby", "SQL"],
  },
  {
    id: "4678-2",
    firstName: "Paul",
    lastName: "Dodds",
    specialities: ["Backend"],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  let resposta = "";
  for (let x of professionalBoard) {
    if (x.id === id) {
      resposta = x;
    }
  }
  if (!resposta) {
    throw new Error("ID não identificada");
  } else if (!resposta[detail]) {
    throw new Error("Informação indisponível");
  } else {
    return resposta[detail];
  }
};
console.log(searchEmployee("4678-2", "firstName"));
/* const search = (value1, value2) => {
  try {
    searchEmployee(value1, value2);
  } catch (error) {
    throw error.message;
  }
}; */
//console.log(searchEmployee("9852-2-2", "firstName"));

//Caso o id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada" . Se a informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível" .

module.exports = {
  searchEmployee,
  sum,
  myRemove,
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate,
};
