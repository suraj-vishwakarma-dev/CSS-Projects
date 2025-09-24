//Function Declaration
sayHello('Suraj');// this calls the function and works fine BUt function expression will not work like this
function sayHello(naam){
    console.log(`Hello ${naam}`);
}



//Function Expression

/*
When we store function inside a variable it is called Function Expression
*/

const greetings = function (user) {
    console.log(`Hello ${user}`);
}

greetings("Bhagirath");