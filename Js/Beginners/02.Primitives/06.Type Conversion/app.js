//Type Conversion

//String to Number

let str =  "123";
let num = Number(str); //Using Number function
console.log(num);//123
console.log(typeof num);//number

let num2 = +str; //Using unary plus operator
console.log(num2);//123
console.log(typeof num2);//number
//If the string is not a valid number, it will return NaN
let invalidStr = "abc";
let invalidNum = Number(invalidStr);
console.log(invalidNum);//NaN
console.log(typeof invalidNum);//number

console.log(+"hi my name is john");//NaN

console.log(parseInt(str));//123, parseInt converts string to integer

//is there any difference between Number() and parseInt()?
console.log(Number("123abc"));//NaN
console.log(parseInt("123abc"));//123, parseInt parses until it encounters a non-numeric character

//Number to String

console.log("<----Number to String---->");
let num3 = 456;
num3 = num3.toString(); //Using toString method

let num4 = 789;
num4 = String(num4); //Using String function  or Constructor

console.log(num3);//"456"
console.log(typeof num3);//string
console.log(num4);//"789"
console.log(typeof num4);//string

//String to Decimal Number

console.log("<----String to Decimal Number---->");

let num5 = "123.45";
num5 = parseFloat(num5); //Using parseFloat function
console.log(num5);  //123.45
console.log(typeof num5);//number

//Boolean to Number

console.log("<----Boolean to Number---->");
let bool1 = true;
let bool2 = false;
let num6 = Number(bool1); //Using Number function
let num7 = Number(bool2);
console.log(num6);//1
console.log(num7);//0

//Boolean to String

console.log("<----Boolean to String---->");
let bool3 = true;
let bool4 = false;
let str1 = String(bool3); //Using String function
let str2 = String(bool4);
console.log(str1);//"true"
console.log(str2);//"false"

//Null to Number

console.log("<----Null to Number---->");
let nullValue = null;
let num8 = Number(nullValue); //Using Number function
console.log(num8);//0   

//Undefined to Number

console.log("<----Undefined to Number---->");
let undefinedValue = undefined;
let num9 = Number(undefinedValue); //Using Number function
console.log(num9);//NaN

