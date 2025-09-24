//A function is a block of code that performs a specific task.
// Function makes the code reusable. You can declare it once and use it multiple times.
// Function makes the program easier as each small task is divided into a function.
// Function increases readability.
// DRY - Don't Repeat Yourself
// function name(parameterIfAny) {...}

function greet() {
    console.log("Hello from Suraj");
}
greet();
greet();//Code reusability
greet();//code resusability

//pass Parameter or Local variable
function sayHello(naam) {
    console.log(`Hello ${naam}`);

}

sayHello("SUran");//Pass parameter
sayHello("kamu");//Pass parameter

//return in Function

function add(a, b) {
    return a + b;
}

const res1 = add(10,20);//when use return , i can't give u output you have to use console.log() 
const res2 = add(13,40);//when use return , i can't give u output you have to use console.log() 
const res3 = add(12,210);//when use return , i can't give u output you have to use console.log() 
console.log(res1);
console.log(res2);
console.log(res3);


