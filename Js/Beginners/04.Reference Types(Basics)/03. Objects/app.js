//Objects

/*
An Object is a variable that can hold many variables.

Objects are collections of key-value pairs, where each key (known as property names) has a value.

You should declare objects with the const keyword.

When an object is declared with const, you cannot later reassign it to point to a different variable.

It does not make the object unchangeable. You can still modify its properties and values.
 */
const person = {
    firstName: 'Suraj',
    lastName: 'Vishwakarma',
    age: 19,
    location: ["Jharkhand", "Dhanbad"],
    isProgrammer: true
}

//Accessing Properties
console.log(person);
console.log(typeof person);
console.log(person.location[1]);
console.log(person.age);
console.log(person.isProgrammer);
console.log(person["isProgrammer"]);

//updating properties
console.log(person.firstName = "Bhagirath");
console.log(person);

//Create empty object and add the properties later
console.log("----Empty Object----");
const person2 = {};
console.log(person2);
//Add Properties
console.log("----After Adding Properties----");
person2.firstName = "Bhagirath";
person2.lastName = "Vishwakarma";
person2.age = 21;

console.log(person2);

//Accessing element by . notation vs [] botation

//delete
delete person.lastName;
console.log(person);