
abstract class Animal {
    name: string;
    species: string;
    age: number;
    
    constructor(name: string, species: string, age: number) {
      this.name = name;
      this.species = species;
      this.age = age;
    }
    
    abstract makeSound(): void;
    
    getAnimalInfo(): string {
      return `${this.name} is a ${this.species} that is ${this.age} years old.`;
    }
  }
  
  class Dog extends Animal {
    constructor(name: string, age: number) {
      super(name, "dog", age);
    }
    
    makeSound(): void {
      console.log(`${this.name} barks!`);
    }
  }
  
  
  let dog = new Dog("Fido", 3);
  
  
  dog.makeSound(); // Output: "Fido barks!"
  console.log(dog.getAnimalInfo()); // Output: "Fido is a dog that is 3 years old."
 
  