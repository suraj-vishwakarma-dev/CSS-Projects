//Primitive types
  /* Number
    waht is Number in JavaScript?
    - In JavaScript, 'Number' is a primitive data type used to represent both integer and floating-point numbers.
    - JavaScript uses a double-precision 64-bit binary format IEEE 754 for representing numbers, which allows for a wide range of values.
    - Numbers can be positive, negative, or zero, and they can also include special values like NaN (Not-a-Number) and Infinity.
    - You can perform various arithmetic operations on numbers, such as addition, subtraction, multiplication, and division.
    - JavaScript also provides several built-in methods for working with numbers, such as toFixed(), toPrecision(), and parseFloat().
  */
     
 // Upper definition , with examples code
// All Example of Number in JavaScript
let integerNumber = 42; // Integer
let floatingPointNumber = 3.14; // Floating-point number
let negativeNumber = -7; // Negative number
let zero = 0; // Zero
let largeNumber = 1.2e+6; // Scientific notation (1.2 million)
let smallNumber = 5e-3; // Scientific notation (0.005)
let notANumber = NaN; // Not-a-Number
let infinity = Infinity; // Positive infinity
let negativeInfinity = -Infinity; // Negative infinity



console.log("Integer Number:", integerNumber);
console.log("Floating-point Number:", floatingPointNumber);
console.log("Negative Number:", negativeNumber);
console.log("Zero:", zero);
console.log("Large Number (Scientific Notation):", largeNumber);
console.log("Small Number (Scientific Notation):", smallNumber);
console.log("Not-a-Number (NaN):", notANumber);
console.log("Positive Infinity:", infinity);
console.log("Negative Infinity:", negativeInfinity);
// Output:
// Integer Number: 42
// Floating-point Number: 3.14
// Negative Number: -7
// Zero: 0
// Large Number (Scientific Notation): 1200000
// Small Number (Scientific Notation): 0.005
// Not-a-Number (NaN): NaN
// Positive Infinity: Infinity
// Negative Infinity: -Infinity

//Typeof operator
console.log(typeof integerNumber); // "number"
console.log(typeof floatingPointNumber); // "number"
console.log(typeof negativeNumber);     // "number"
console.log(typeof notANumber); // "number"     
console.log(typeof infinity); // "number"
console.log(typeof negativeInfinity); // "number"
// Output:
// Note: In JavaScript, all numeric values, including integers and floating-point numbers, are of type "number".    

// Arithmetic operations
let sum = integerNumber + floatingPointNumber;
let difference = integerNumber - negativeNumber;
let product = integerNumber * floatingPointNumber;
let quotient = integerNumber / floatingPointNumber;
console.log(3 ** 2); // Exponentiation: 9
console.log("Sum:", sum); // 45.14
console.log("Difference:", difference);
console.log("Product:", product); // 131.88
console.log("Quotient:", quotient); // 13.375796178343949
// Output:
// Sum: 45.14
// Difference: 49
// Product: 131.88
// Quotient: 13.375796178343949
// Note: JavaScript has some quirks with floating-point arithmetic due to the way numbers are represented in binary.

// Built-in methods
let fixedNumber = floatingPointNumber.toFixed(1); // "3.1"
let preciseNumber = floatingPointNumber.toPrecision(2); // "3.1"
let parsedNumber = parseFloat("3.14abc"); // 3.14
console.log("Fixed Number:", fixedNumber);
console.log("Precise Number:", preciseNumber);
console.log("Parsed Number:", parsedNumber);
// Output:
// Fixed Number: 3.1
// Precise Number: 3.1
// Parsed Number: 3.14
// Note: toFixed() and toPrecision() return strings, while parseFloat() converts a string to a floating-point number.

let cnt  = 0;
cnt--;
cnt--;
cnt--;
cnt--;
cnt--;
cnt--;

console.log(cnt); //1