//When we provide function as an (argument) to other
//function that function is knowns as callback function.

function showcallFun(fn) {
    const value = 10;
    fn(value);
}

showcallFun(function(value) {
    console.log(value);
});

//function
function greet (name, cb) {
    console.log(`Hello${name}`);
    cb();
}

//Callback function
function callMe() {
    console.log("I am callback function");
}

//Passing function as an argument (callback)
greet("petr", callMe);

//or
greet("petr", function callMe() {
    console.log("I am callback function");
});

