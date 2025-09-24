// Scope in JavaScript refers to the current context of code, which determines the accessibility of variables to JavaScript.

// The two types of scope are local and global

// Global variables are those declared outside of a block.

// Local variables are those declared inside of a block.

let textMessage = 'hi';//Global Scope

function showMessage() {
    let textMessage = "hey";//Local Scope
    console.log(textMessage);//Access local Scope
}
showMessage();

for (let i = 0; i < 5; i++) {
    console.log(i)//Local scope
}

//console.log(i); //Global Scope, ERROR : i is not defined
console.log(textMessage); //Access Global Scope