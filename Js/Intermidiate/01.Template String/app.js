/*
Template literals, also known as template strings, are a feature in JavaScript (introduced in ES6) 
that provide a more flexible and readable way to work with strings compared to traditional string concatenation


Key characteristics and uses of template literals:

    Backticks (`):
    Template literals are enclosed in backticks (`) instead of single (') or double (") quotes.
    
    String Interpolation:
    They allow for easy "embedding" of variables or expressions directly within the string using the ${...} syntax. 
    This eliminates the need for string concatenation operators (+). 

*/

let firstName = 'Suraj';
let lastName = "Vishwa";

function info(){
    return 'My name is Suraj Vishwakumar'
}

console.log(`Hi my name is ${firstName +" "+ lastName} `);
console.log(`${info()}`);