// `Class`: Person
// `Attributes`:
//     - name: nome da pessoa
//     - birthDate: data de nascimento da pessoa
// `Methods`:
//     - Getters/Setters
//     - constructor: deve receber como parâmetro nome e data de nascimento
// `Validations`:
//     - O nome deve ter no mínimo três caracteres
//     - A data de nascimento não pode ser uma data no futuro
//     - A pessoa não pode possuir mais de 120 anos

class Person {
  constructor(private _name: string, private _birthDate: Date) {}
  
  public get name(): string {
    return this._name;
  }

  public set name(x: string) {
    if (this.validationName(x)) this._name = x;
  }

  private validationName(x: string): boolean{
    return x.length > 3;
  }

  get birthDate(): Date {
    return this._birthDate;
  }

  set birthDate(value: Date) {
    this._birthDate = value;
  }
}
const italo = new Person('italo', new Date('08/11/1996'))
