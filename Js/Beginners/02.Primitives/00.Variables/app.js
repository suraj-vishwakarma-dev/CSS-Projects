//From Huxn web dev

let nam;
nam = "John Doe";
console.log(nam);

nam = "suraj";
console.log(nam);

const num = 5;
console.log(num);
//num = 10; // Error: Assignment to constant variable
//

//Naming convectiopns for variables
//1. Variable names can contain letters, digits, underscores, and dollar signs.
//2. Variable names must begin with a letter, underscore (_), or dollar sign ($). They cannot start with a digit.

/*
What is variable?
A variable is a named storage for data. It allows you to store, 
retrieve, and manipulate values in your program.
Variables are fundamental to programming and are used to hold different types of data, such as numbers, strings, objects, and more.
*/

/*waht is let, const, & var?
- let: 'let' is used to declare block-scoped variables. It allows you to create variables that can be reassigned new values. 
  Variables declared with 'let' are limited to the block, statement, or expression in which they are used.
- const: 'const' is used to declare block-scoped variables that cannot be reassigned after their initial assignment.
  However, if the variable holds an object or array, the contents of that object or array can still be modified.
- var: 'var' is used to declare function-scoped or globally-scoped variables. 
  Variables declared with 'var' can be reassigned and are hoisted to the top of their scope, which can lead to unexpected behavior.
*/

/*
waht is block-scoped & function-scoped?
- Block-scoped: Variables declared with 'let' and 'const' are block-scoped, meaning they are only accessible within the block (enclosed by curly braces {}) in which they are defined. 
  This helps prevent variable name conflicts and unintended side effects.
- Function-scoped: Variables declared with 'var' are function-scoped, meaning they are accessible throughout the entire function in which they are defined, 
  regardless of block boundaries. This can lead to issues if a variable is unintentionally overwritten or accessed outside its intended scope.
*/

//example of block-scoped variable
{
    let blockScopedVariable = "I am block-scoped";  
    const anotherBlockScopedVariable = "I am also block-scoped";
    console.log(blockScopedVariable);
    console.log(anotherBlockScopedVariable);
}

//console.log(blockScopedVariable); // Error: blockScopedVariable is not defined
//console.log(anotherBlockScopedVariable); // Error: anotherBlockScopedVariable is not defined
//why error? because blockScopedVariable & anotherBlockScopedVariable are block-scoped, so they are not accessible outside the block

// we can't access blockScopedVariable & anotherBlockScopedVariable outside the block

//example of function-scoped variable
function functionScopeExample() {
    var functionScopedVariable = "I am function-scoped";
    console.log(functionScopedVariable); // Accessible here
}
functionScopeExample();
//console.log(functionScopedVariable); // Error: functionScopedVariable is not defined
//why error? because functionScopedVariable is function-scoped, so it is not accessible outside the function

// we can't access functionScopedVariable outside the function

//if is use var in block and let & const in function
{
    var functionScopedVariableInBlock = "I am function-scoped but declared in block";
    console.log(functionScopedVariableInBlock); // Accessible here
}
console.log(functionScopedVariableInBlock); // Accessible here
//why not error? because functionScopedVariableInBlock is function-scoped, so it is accessible outside the block

// means var can be accessed outside the block but let & const can't be accessed outside the block

//Difference between let, const, and var
let variable1 = "I am a variable declared with let";
const variable2 = "I am a variable declared with const";
var variable3 = "I am a variable declared with var";

variable1 = "I can be reassigned"; // Allowed
//variable2 = "I cannot be reassigned"; // Error: Assignment to constant variable   
variable3 = "I can also be reassigned"; // Allowed

console.log(variable1);
console.log(variable2);
console.log(variable3);

//so what is the main difference b/w let and var other than scope?
//The main difference between 'let' and 'var' is their scope. 
//'let' is block-scoped, meaning it is only accessible within the block it is defined in, while 'var' is function-scoped, meaning it is accessible throughout the entire function it is defined in.
//Additionally, 'var' declarations are hoisted to the top of their scope, which can lead to unexpected behavior, while 'let' declarations are not hoisted in the same way.
//what is hoisting?
//Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. 
//This means that you can use variables and functions before they are declared in the code.


