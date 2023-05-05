interface Person {
  name: string;
  age: number;
  sayHello(): void;
}

class Student implements Person {
  name: string;
  age: number;
  studentID: string;

  constructor(name: string, age: number, studentID: string) {
    this.name = name;
    this.age = age;
    this.studentID = studentID;
  }

  sayHello(): void {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

const dilara = new Student('Dilara', 21, '20200808017');
dilara.sayHello(); // Output: "Hello, my name is Dilara and I'm 21 years old."
