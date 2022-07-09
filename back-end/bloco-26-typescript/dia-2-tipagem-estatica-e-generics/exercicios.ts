enum Color {
  Black = "Preto",
  white = "Branco",
  Red = "Vermelho",
  Grey = "Prata",
}

enum Doors {
  DRIVER = "da pessoa motorista",
  RIDE = "da pessoa carona",
  BEHIND_DRIVER = "de trás da pessoa motorista",
  BEHIND_RIDE = "de trás da pessoa carona"
}

class Car {
  brand: String;
  color: Color;
  doors: Number;

  constructor(color: Color, brand: String, doors: Number) {
    this.brand  = brand;
    this.color  = color;
    this.doors  = doors;
  }

  honk(): void {
    console.log(`bibi`);
  }

  openTheDoor(door: Doors): void {
    console.log(`Abre a porta ${door}`);
  }

  closeTheDoor(door: Doors): void {
    console.log(`fecha a porta ${door}`);
  }

  turnOn(): void {
    console.log(`vrummm vrumm`);
  }
}

type Slices = 4 | 6 |  8;

interface Pizza {
  flavor: string;
  slices: Slices;
}

// Crie uma pizza sabor Calabresa de 8 fatias; 
const calabresa: Pizza = {
  flavor: 'calabresa',
  slices: 8,
} 

// Crie uma pizza sabor Marguerita de 6 fatias; 
const Marguerita: Pizza = {
  flavor: 'Marguerita',
  slices: 6,
} 

// Crie uma pizza sabor Nutela de 4 fatias;
const Nutela: Pizza = {
  flavor: 'Nutela',
  slices: 4,
} 
