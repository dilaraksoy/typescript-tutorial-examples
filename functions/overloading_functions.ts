function print(value: string): void;
function print(value: number): void;
function print(value: boolean): void;
function print(value: any): void {
  console.log(value);
}

print("Hello"); // prints "Hello"
print(25); // prints 25
print(true); // prints true
