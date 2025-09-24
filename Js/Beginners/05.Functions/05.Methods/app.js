//Method

/*
Method is nothing but a function inside an object
*/

//Define function outside of object and pass reference of that function in object

function greet() {
    return `Hello, my name is ${person.name} & I am ${person.age} years old.`;
}

const person = {
    name: "Jogn",
    age: 26,
    greet, //pass the functions's reference
};
console.log(person.greet());

//Inside

const person2 = {
    name: "Suraj",
    age: 19,
    greet: function () {
        return `Hello, my name is ${person2.name} & I am ${person2.age} years old.`;
    },
};

console.log(person2.greet());