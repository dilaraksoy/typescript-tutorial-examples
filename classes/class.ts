class Car {
    make: string;
    model: string;
    year: number;
    
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
    
    getAge(): number {
      const currentYear = new Date().getFullYear();
      return currentYear - this.year;
    }
    
    getInfo(): string {
      return `This is a ${this.year} ${this.make} ${this.model}.`;
    }
  }
  
  let car1 = new Car("Toyota", "Corolla", 2010);
  let car2 = new Car("Honda", "Accord", 2015);
  
  console.log(car1.getAge()); // Output: 11
  console.log(car2.getInfo()); // Output: "This is a 2015 Honda Accord."
  