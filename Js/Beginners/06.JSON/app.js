// JSON stands for JavaScript Object Notation. It is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. JSON is often used for transmitting data between a server and a web application, as well as for storing configuration settings and data.

// In JavaScript, JSON is represented as a string, and it closely resembles JavaScript object literal notation. It consists of key-value pairs, where keys must be strings, and values can be strings, numbers, booleans, arrays, or nested objects. The key-value pairs are separated by commas, and the entire JSON object is enclosed in curly braces {}.

// -----------------------
// JavaScript provides methods to work with JSON data:

// JSON.stringify(): Converts a JavaScript object into a JSON string.
// JSON.parse(): Parses a JSON string and returns a JavaScript object.
// -----------------------

//From W3 school

// JSON stands for JavaScript Object Notation.

// JSON is a plain text format for storing and transporting data.

// JSON is similar to the syntax for creating JavaScript objects.

// JSON is used to send, receive and store data.

// Why JSON?

//     JSON is make it easy to send and store data between computers
//     JSON is text only and language independent *


//  The syntax is derived from JavaScript object syntax, but JSON is text only.

// Code for reading and generating JSON data can be written in any programming language.

// The JSON format was originally specified by Douglas Crockford

// -----------------------
// Example

const person = {
    "name": "Suraj",
    "age": 20,
    "email": "hi@gmail",
    "isRun": true,
    "hobbies": ["reading", "rinning", "hiking", "cooking"],
    "address": {
        "city": "Roorke",
        "isyes": true,
    },
};

//JSOn.stringify () : this covert js object into JSON

const jsonstring = JSON.stringify(person);
console.log(jsonstring);


//JSON.parse() conver json into js object

const parseobj = JSON.parse(jsonstring);
console.log(parseobj);