//Array Basic Methids
/*
Method 	Description
concat() 	joins two or more arrays and returns a result
includes() 	checks if an array contains a specified element
push() 	aads a new element to the end of an array and returns the new length of an array
unshift() 	adds a new element to the beginning of an array and returns the new length of an array
pop() 	removes the last element of an array and returns the removed element
shift() 	removes the first element of an array and returns the removed element
sort() 	sorts the elements alphabetically in strings and in ascending order
slice() 	selects the part of an array and returns the new array
splice() 	removes or replaces existing elements and/or adds new elements
*/

const fruits = [
    "apples",
    "banana",
    "mango",
    "guava",
    "grapes",
    "watermelon"
];

fruits.push('carrot');
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("orange");
console.log(fruits);

//concat()

const fruits2 = [
    "strawberries",
    "pomegranate",
    "tomato"
]

const totFruits = fruits.concat(fruits2);
console.log(totFruits);

//include(), return true or false

console.log(fruits.includes("orange"));

//join()

console.log(fruits.join("-"));//used in urls

//reverse()

//console.log(fruits.reverse());

//slice()
console.log("----Slice()----");

console.log(fruits.slice(0, 3));

console.log(fruits.sort());