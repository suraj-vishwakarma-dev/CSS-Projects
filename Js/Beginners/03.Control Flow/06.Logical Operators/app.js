//Logical Operators

/*
Logical operators are used to combine boolean expressions.

Logical Operators can be used to modify the results of comparisons.

Typically, You will use a comparison operator to check a conditio, and a logical
operator to combine condition into more complex logic.
*/

/*
JavaScript Logical Operators

Logical operators are used to determine the logic between variables or values.

Given that x = 6 and y = 3, the table below explains the logical operators:
Oper 	Name 	Example 	Try it
&& 	AND 	(x < 10 && y > 1) is true 	
|| 	OR 	(x === 5 || y === 5) is false 	
! 	NOT 	!(x === y) is true
*/

//1. Logical AND (&&)

//TRUE if both the operands/expressions are true, otherwise false

const a = true;
const b = false;
const c = 4;

console.log(a && a); //true
console.log(a && b); //false

console.log(c > 2 && c == 4); // true;

let x = 6;
let y = 3;
console.log(x < 10 && y > 1); //true

//2. Logical OR (||)

console.log(a || b); //true
console.log(b || b); //false
console.log(c > 10 || c == 4 ); //true

//3. Logical NOT (!)

//The NOT operator(!) returns true for false expression and false for true expressions

console.log(!a);//false
console.log(!b);//true

console.log("--experiments--");
console.log(5==8); //false
console.log(!(5 == 8));//true

let isTrue = true;
console.log(!isTrue);

console.log("----------------");

let password = "Suraj#123";

if (password.length >= 8 && password.includes("@")) {
    console.log("VALID PASSOWRD");
} else {
    console.log("INVALID PASSWORD");
}

