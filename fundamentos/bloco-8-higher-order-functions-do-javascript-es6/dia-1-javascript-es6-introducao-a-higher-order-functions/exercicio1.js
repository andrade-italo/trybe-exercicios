/* 1 - Crie uma função que retorne um objeto no formato { nomeCompleto, email } 
representando uma nova pessoa contratada. Passe sua função como parâmetro da HOF 
newEmployees para criar cada pessoa contratada em seu respectivo id . A sua função 
deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele 
gerar automaticamente um email no formato nome_da_pessoa@trybe.com */

const obj = (nome) => {
  const nomeCompleto = nome;
  let tratamento = nome.toLowerCase().replace(/\s/g, "");
  const email = `${tratamento}@trybe.com`;
  return { nomeCompleto: nome, email: email };
};

const newEmployees = (func) => {
  const employees = {
    id1: func("Pedro Guerra"), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: func("Luiza Drumond"), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: func("Carla Paiva"), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

console.log(newEmployees(obj));
console.group();

/* 2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um 
número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função 
que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve 
ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

const sorteio = () => {
  const sorteado = Math.floor(Math.random() * 4.98 + 1);
  return sorteado;
};

const resultado = (aposta, sorteio) => {
  return aposta === sorteio ? "Parabéns você ganhou" : "Tente novamente";
};
console.log(resultado(5, sorteio()));

/* 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas 
corretas (Gabarito), o segundo será um array de respostas a serem verificadas 
(respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas 
estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao 
final a HOF deve retornar o total da contagem de respostas certas. */
console.group();
const nota = (gabarito, prova, check) => {};
const check = (gabarito, prova) => {
  let soma = 0;
  for (let x in prova) {
    prova[x] === gabarito[x] ? (soma += 1) : (soma -= 0.5);
  }
  return soma;
};

const RIGHT_ANSWERS = ["A", "C", "B", "D", "A", "A", "D", "A", "D", "C"];
const STUDENT_ANSWERS = ["A", "N.A", "B", "D", "A", "C", "N.A", "A", "D", "B"];

console.log(check(RIGHT_ANSWERS, STUDENT_ANSWERS));
