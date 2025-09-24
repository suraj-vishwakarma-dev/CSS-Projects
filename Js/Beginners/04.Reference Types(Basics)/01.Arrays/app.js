//Array
/*
->An Array is an object type designed for storing data collections.

->Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

 But, JavaScript arrays are best described as arrays.

 Arrays use numbers to access its "elements". In this example, person[0] returns John:

 Objects use names to access its "members". In this example, person.firstName returns John:

 const person = {firstName:"John", lastName:"Doe", age:46}; 


 ->Array Elements can be objects 
    JavaScript variables can be objects. Arrays are special kinds of objects.

    Because of this, you can have variables of different types in the same Array.

    You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
        myArray[0] = Date.now;
        myArray[1] = myFunction;
        myArray[2] = myCars;
*/

const arr = [1, 3, 5, 6, 7];
console.log(arr);

const str = ["eat", "sleep", "code", "repeat"];

//Accessing Array Elements
console.log(arr[2]);

console.log(str[0]);
console.log(str[1]);
console.log(str[2]);
console.log(str[3]);

//Nested Array

const nestarr = ["onr",  true, false, [1, 3, "hello", 0, 3], 1];
console.log(nestarr);

//Acces nested array
console.log(nestarr[3][3]);//output: 0
console.log(nestarr[3][2]);//output: hello

// array with mixed data types
// const newData = ["work", "exercise", 1, true];
// -----------------------------------
const newData = [
  { task1: "exercise" },
  [1, 2, 3],
  function hello() {
    console.log("hello");
  },
  
];

console.log(newData);

