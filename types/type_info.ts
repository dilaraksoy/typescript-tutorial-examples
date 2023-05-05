// Boolean variable
let bool: boolean = false;

// Numeric variables
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// String variable
let fullName: string = "Dilara Aksoy";
let age: number = 21;
let sentence: string = `My name is ${fullName} and I am ${age} years old.`;

// Array variable
let list: number[] = [1, 2, 3];
let genericList: Array<number> = [1, 2, 3];

// Tuple variable
let x: [string, number];
x = ["CSE", 392];

// Enum variable
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Any variable
let notSure: any = 456;
notSure = "hello";
notSure = false;

// Void variable
function error(): void {
  console.log("This is a error message!");
}

// Null and Undefined variables
let u: undefined = undefined;
let n: null = null;