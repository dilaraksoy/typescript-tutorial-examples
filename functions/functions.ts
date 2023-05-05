// This function takes three parameters, x and y are required and z is optional
// The function returns the sum of x, y, and z if z is provided, otherwise it returns the sum of x and y
function add(x: number, y: number, z?: number): number {
    if (z) {
      return x + y + z;
    } else {
      return x + y;
    }
  }
  
  // This function takes two parameters, x and y
  // The second parameter has a default value of 1, so if y is not provided it defaults to 1
  // The function returns the product of x and y
  function multiply(x: number, y: number = 1): number {
    return x * y;
  }
  