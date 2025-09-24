/*
 
Arrow functions in JavaScript, introduced in ES6, provide a concise syntax for writing function expressions. They are a more compact alternative to traditional function expressions and offer distinct behavior regarding the this keyword.
Syntax:
The basic syntax of an arrow function is:
JavaScript

let myFunction = (param1, param2) => {
  // function body
  return result;
};

Key Characteristics and Differences from Traditional Functions:

    Concise Syntax: Arrow functions eliminate the need for the function keyword and often allow for implicit returns, especially in single-expression functions.
        Traditional: 

JavaScript

        function add(a, b) {
          return a + b;
        }

Arrow (Concise).
JavaScript

        const add = (a, b) => a + b;

    this Binding:
    Arrow functions do not have their own this binding. Instead, they inherit this from the enclosing lexical scope (the scope in which they are defined). This behavior is particularly useful in scenarios like event handlers or methods within objects, where this in traditional functions might require explicit binding (e.g., bind()).
    No arguments Object:
    Arrow functions do not have their own arguments object. If you need to access arguments, you can use rest parameters (...args).
    Not Usable as Constructors:
    Arrow functions cannot be used with the new keyword and cannot be used as constructors. Attempting to do so will result in a TypeError.
    No prototype Property:
    Arrow functions do not have a prototype property. 

When to Use Arrow Functions:

    For short, single-expression functions where conciseness is desired.
    As callbacks in array methods (e.g., map, filter, reduce).
    In situations where you need to preserve the this context of the surrounding scope, such as within object methods or event listeners. 

When to Use Traditional Functions:

    When you need a function to be a constructor (e.g., for creating objects with new).
    When you need access to the arguments object.
    When you need to define methods on an object's prototype. 


*/

function greet(user) {
    return `Hello ${user}`;
}

console.log(greet());

//This code in arrow function

const greet2 = (user) => {
    return `hello ${user}`;
};

console.log(greet2("vihas"));