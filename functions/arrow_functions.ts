// Define a type for the function parameters
type AddFunctionParams = {
  a: number;
  b: number;
};

// Define a type for the function return value
type AddFunctionResult = number;

// Arrow function to add two numbers
const addNumbersArrow = (params: AddFunctionParams): AddFunctionResult => {
  const { a, b } = params; // Destructure the parameters
  return a + b; // Return the sum of the two parameters
};

// Usage
const result = addNumbersArrow({ a: 1, b: 2 });
console.log(result); // Output: 3
