// Declare an interface by "interface" keyword
interface ICar {
    model: string;
    make: string;
    year: number;
    start: () => void; // arrow function
    stop(): void; // function declaration
  }
  
  // Implementing an interface in a class
  class Car1 implements ICar {
    model: string;
    make: string;
    year: number;
  
    constructor(model: string, make: string, year: number) {
      this.model = model;
      this.make = make;
      this.year = year;
    }
  
    start() {
      console.log(`Starting the ${this.model}`);
    }
  
    stop() {
      console.log(`Stopping the ${this.model}`);
    }
  }
  
  // Creating an object using the class that implements the interface
  const myCar: ICar = new Car1('Mustang', 'Ford', 2022);
  
  myCar.start(); // logs "Starting the Mustang"
  myCar.stop(); // logs "Stopping the Mustang"
  