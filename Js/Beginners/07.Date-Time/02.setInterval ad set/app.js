/*
The window object allows execution of code at specified time intervals.

These time intervals are called timing events.

The two key methods to use with JavaScript are:

    setTimeout(function, milliseconds)
    Executes a function, after waiting a specified number of milliseconds.

    setInterval(function, milliseconds)
    Same as setTimeout(), but repeats the execution of the function continuously.

The setTimeout() and setInterval() are both methods of the HTML DOM Window object.
*/

//setInterval()

/*
The first parameter is a function to be executed.

The second parameter indicates the number of milliseconds before execution. 
 */

// setInterval(function() {
//     console.log("This function will executed every 2 seconds.");
// }, 2000);

//Stop the execution(after 10sec)
const intervalId = setInterval(function() {
    console.log("This function will be executed every 2 seconds.");
}, 2000);
setTimeout(function() {
    clearInterval(intervalId);
    console.log("Interval stopped after 10s");
}, 10000);


//setTimeout()

/*
execute the code in specified delay
 */

// setTimeout(function() {
//     console.log("This finction will be executed after 3s")
// }, 3000);