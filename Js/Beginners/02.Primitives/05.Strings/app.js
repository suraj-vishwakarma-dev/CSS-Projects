//Strings

/*
what is string?
A string is a sequence of characters used to represent text. In programming, strings are typically enclosed in quotes, 
either single (' '), double (" "), or backticks (` `) depending on the language and context.

Are these quotes single (' '), double (" "), or backticks (` `) same?
No, they are not the same. Each type of quote has its own use cases and characteristics:
1. Single Quotes (' '):
    - Used for defining string literals.
    - Do not support interpolation (embedding expressions).
    - Example: 'Hello, World!'
2. Double Quotes (" "):
    - Also used for defining string literals.
    - Support interpolation in some languages (like JavaScript with template literals).
    - Example: "Hello, World!"
3. Backticks (` `):
    - Used for template literals in JavaScript.
    - Support multi-line strings and interpolation.
    - Example: `Hello, ${name}!`
    
*/

//Differce b/w "" and ``

// let sum = "hi my name is suraj
// visnhwakarma what is your name

// "; // "" doesnot support multi-line strings

let summ = `hi my name is suraj 
vishwakarma 
what is you name`;
// `` supports multi-line strings, i t also includes line breaks and spaces as part of the string.

//append using ``

let firName = 'Suraj';
let latName = 'Vishwakarma';
let fulName = `My Full name is ${firName} ${latName}`; // Using template literals
console.log(fulName);



//Declaring strings
let singleQuotes = 'Hello, World!'; // Using single quotes
let doubleQuotes = "Hello, World!"; 
let backticks = `Hello, World!`; // Using backticks

console.log(singleQuotes);
console.log(doubleQuotes);
console.log(backticks);

//String concatenation
let firstName = 'John';
let lastName = 'Doe';
console.log(firstName + ' ' + lastName); // Using + operator
console.log(`${firstName} ${lastName}`); // Using template literals
console.log(firstName.concat(' ', lastName)); // Using concat() method

//String properties and methods

let sampleString = "Hello JavaScript!  ";

console.log(sampleString.length); // Length of the string
console.log(sampleString.toUpperCase()); // Convert to uppercase
console.log(sampleString.toLowerCase());
console.log(sampleString.trim()); // Remove whitespace from both ends
console.log(sampleString.includes('JavaScript'));// Check if substring exists
console.log(sampleString.startsWith('Hello')); // Check if string starts with a substring
console.log(sampleString.endsWith('!  ')); // Check if string ends with a substring
console.log(sampleString.indexOf('JavaScript')); // Get index of substring
console.log(sampleString.slice(2, 7));

//String append
let appendString = 'Hello';
appendString += ' World';
//or

appendString = appendString + ' World';
console.log(appendString);

//split and join method

let naam = "SURAJ"
console.log(naam.split('')); // Splits the string into an array of characters, output: ['S', 'U', 'R', 'A', 'J']
console.log(naam.split("")); //output: ['S', 'U', 'R', 'A', 'J']
console.log(naam.split(' ')); //output: ['SURAJ']

console.log(naam.split('A')); // Splits the string at each occurrence of 'A', output: ['SUR', 'J']
console.log(naam.split('U')); // Splits the string at each occurrence of 'U', output: ['S', 'RAJ']
console.log(naam.split('S')); // Splits the string at each occurrence of 'S', output: ['', 'URAJ']
console.log(naam.split('J')); // Splits the string at each occurrence of 'J', output: ['SURA', '']

//join method

let arr = ['S', 'U', 'R', 'A', 'J'];
console.log(arr.join(''));//output: 'SURAJ'

console.log(naam.split('').join(''));//output: 'SURAJ'
console.log(naam.split('A').join(''));//output: 'SURJ'
console.log(naam.split('U').join(''));//output: 'SRAJ'
console.log(naam.split('S').join(''));//output: 'URAJ'
console.log(naam.split('J').join(''));//output: 'SURA'
