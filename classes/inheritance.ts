class Shape {
    color: string;
    constructor(color: string) {
      this.color = color;
    }
    getInfo() {
      return `This shape is ${this.color}.`;
    }
  }
  
  class Square extends Shape {
    sideLength: number;
    constructor(color: string, sideLength: number) {
      super(color);
      this.sideLength = sideLength;
    }
    getArea() {
      return this.sideLength ** 2;
    }
  }
  
  const mySquare = new Square('red', 4);
  console.log(mySquare.getInfo()); // Output: This shape is red
  console.log(mySquare.getArea()); // Output: 16
  