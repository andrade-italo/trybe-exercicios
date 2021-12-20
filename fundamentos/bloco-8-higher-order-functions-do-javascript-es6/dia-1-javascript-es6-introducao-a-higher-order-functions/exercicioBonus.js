const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

/* 1 - Crie uma função que retorna o dano do dragão.
O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo).*/
const danoDragon = () => {
  dragon.damage = Math.floor(Math.random() * (dragon.strength - 14) + 15);
};

/*2 - Crie uma função que retorna o dano causado pelo warrior .
O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).*/
const danoWarrior = () => {
  warrior.damage = Math.floor(
    Math.random() * (warrior.strength * warrior.weaponDmg) + warrior.strength
  );
  return warrior.damage;
};

/*3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o 
dano e a mana gasta pelo mago em um turno.
O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) 
e o valor de intelligence * 2 (dano máximo).
A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso 
o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui 
mana suficiente") e a mana gasta é 0.
 */

const manaMago = () => {
  const status = {
    mana: 0,
    damage: "Não possui mana suficiente",
  };
  return status;
};

const danoMago = () => {
  mage.damage = Math.floor(
    Math.random() * (mage.intelligence * 2) + mage.intelligence
  );
};

const obj = () => {
  if (mage.mana < 15) {
    return manaMago();
  }
  mage.mana -= 15;
  danoMago();
};

//Parte 2
/* 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que 
simula o turno do personagem warrior . Esta HOF receberá como parâmetro a função que 
calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro 
dragon . Além disto ela também deve atualizar o valor da chave damage do warrior. */

/* 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula 
o turno do personagem mage . Esta HOF receberá como parâmetro a função que calcula o 
dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. 
Além disto ela também deve atualizar o valor das chaves damage e mana do mage. */

/* 3 - Crie a terceira HOF que compõe o objeto gameActions . Ela será a função que 
simula o turno do monstro dragon . Esta HOF receberá como parâmetro a função que 
calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens
mage e warrior . Além disto ela também deve atualizar o valor da chave damage do monstro. */

/* 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers 
atualizado e faça um console.log para visualizar o resultado final do turno. */

const gameActions = {
  WarriorTurn: {
    WarriorDamage: danoWarrior(),
    DragonHealth: (function life() {
      dragon.healthPoints -= warrior.damage;
      return dragon.healthPoints;
    })(),
  },
  MageTurn: {
    MageDamage: (function dano() {
      obj();
      dragon.healthPoints -= mage.damage;
      return mage.damage;
    })(),
    MageMana: mage.mana,
    DragonHealth: dragon.healthPoints,
  },
  MonsterTurn: {
    MonsterDamage: (function monster() {
      danoDragon();
      mage.healthPoints -= dragon.damage;
      warrior.healthPoints -= dragon.damage;
      return dragon.damage;
    })(),
    WarriorHealth: warrior.healthPoints,
    MageHealth: mage.healthPoints,
  },
  battleMembers: battleMembers
};
console.log(gameActions);


//Essa parte é um codigo mais limpo, porem não proporciona a vizualização por turnos.
/* const gameActions = {
  WarriorTurn: (function life() {
    danoWarrior();
    dragon.healthPoints -= warrior.damage;
  })(),

  MageTurn: (function dano() {
    obj();
    dragon.healthPoints -= mage.damage;
  })(),

  MonsterTurn: (function monster() {
    danoDragon();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  })(),

  battleMembers: battleMembers,
};
console.log(gameActions.battleMembers);
 */