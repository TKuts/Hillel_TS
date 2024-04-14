abstract class Figures {
  protected _color: string;
  protected _name: string;

  constructor(color: string, name: string) {
    this._color = color;
    this._name = name;
  }

  get color(): string {
    return this._color;
  }
  get name(): string {
    return this._name;
  }

  abstract calculateArea(): number;
}

class Circle extends Figures {
  private _radius: number;

  constructor(color: string, name: string, radius: number) {
    super(color, name);
    this._radius = radius;
  }

  calculateArea(): number {
    return this._radius * this._radius * Math.PI;
  }
}

class Rectangle extends Figures {
  private _width: number;
  private _length: number;

  constructor(color: string, name: string, width: number, length: number) {
    super(color, name);
    this._width = width;
    this._length = length;
  }

  calculateArea(): number {
    return this._width * this._length;
  }

  print(): string {
    return `Area ${this.name} calculation formula: ${this._width} * ${this._length}`;
  }
}

class Square extends Figures {
  private _side: number;

  constructor(color: string, name: string, side: number) {
    super(color, name);
    this._side = side;
  }
  calculateArea(): number {
    return this._side * this._side;
  }

  print(): string {
    return `Area ${this.name} calculation formula: ${this._side} * ${this._side}`;
  }
}

class Triangle extends Figures {
  private _base: number;
  private _height: number;

  constructor(color: string, name: string, base: number, height: number) {
    super(color, name);
    this._base = base;
    this._height = height;
  }

  calculateArea(): number {
    return (this._base * this._height) / 2;
  }
}
