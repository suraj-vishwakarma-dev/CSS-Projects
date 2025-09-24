//what is booleans?
//booleans are data types that can only have two values: true or false

let isTrue = true;
console.log(isTrue); // Output: true

let isFalse = false;
console.log(isFalse); // Output: false

let num = 10;
console.log(num + undefined); // Output: NaN (Not a Number)

console.log(num + null); // Output: 10 (null is treated as 0 in numeric operations)

//truthy and falsy values
//In JavaScript, certain values are considered "truthy" or "falsy" when evaluated in a boolean context.
//Truthy values are those that evaluate to true, while falsy values evaluate to false.

//Falsy values in JavaScript include:
// false
// 0 (zero)
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
// Everything else is considered truthy

console.log(Boolean(1)); // Output: true (1 is truthy)
console.log(Boolean(0)); // Output: false (0 is falsy)  
console.log(Boolean("Hello")); // Output: true (non-empty string is truthy)
console.log(Boolean("")); // Output: false (empty string is falsy)
console.log(Boolean(``)); // Output: false (empty string is falsy)


//Truty values
console.log(Boolean(42));   
console.log(Boolean("Hello"));
console.log(Boolean([]));//array , output: true
console.log(Boolean({}));//object, output: true
console.log(Boolean(function(){}));//function, output: true
console.log(Boolean(new Date()));//date object, output: true

let notdefined = undefined;
console.log(notdefined); // Output: undefined

let nnull = null;
console.log(nnull); // Output: null

//Difference b/w null and undefined

//nul is assigned by developer to indicate no value
let emptyValue = null;
console.log(emptyValue); // Output: null

//undefined is assigned by JavaScript when a variable is declared but not assigned a value
let notAssigned;
console.log(notAssigned); // Output: undefined
