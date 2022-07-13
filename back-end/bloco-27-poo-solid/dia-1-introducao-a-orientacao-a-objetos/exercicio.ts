class Tv {
  private _brand: string;
  private _size: string;
  private _resolution: string;
  private _connections: string;
  private _connectedTo: string;

  constructor(b: string, s: string, r: string, c: string, ct: string) {
    console.log(`Creating brand ${b}`);
    this._brand = b;
    this._size = s;
    this._resolution = r;
    this._connections = c;
    this._connectedTo = ct;
  }

  get connectedTo() {
    return this._connectedTo;
  }

  set connectedTo(newValue: string) {
      this._connectedTo = newValue;
  }

}

const p1 = new Tv('lg', '15pol', '1500', 'hdmi', 'celular');
console.log(p1.connectedTo)
p1.connectedTo = 'aleatorio'
console.log(p1.connectedTo)
