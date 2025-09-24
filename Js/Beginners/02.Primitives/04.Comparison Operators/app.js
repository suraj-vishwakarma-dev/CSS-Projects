//Comparison Operators

//Two types of comparison operators
//1. Relational Operators
//2. Equality Operators

//Relational Operators
// >, <, >=, <=
console.log(3 > 2); //true
console.log(3 < 2); //false
console.log(3 >= 2); //true
console.log(3 <= 2); //false

//Equality Operators
// ==, ===, !=, !==
console.log(3 == 2); //false
console.log(3 != 2); //true
console.log(3 === 2); //false
console.log(3 !== 2); //true

//Difference between == and ===
// == checks for value equality
// === checks for value and type equality
console.log(3 == '3'); //true
console.log(3 === '3'); //false
console.log(0 == false); //true
console.log(0 === false); //false
console.log(null == undefined); //true
console.log(null === undefined); //false

//null and undefined are only equal to themselves and each other
console.log(null == null); //true
console.log(undefined == undefined); //true
console.log(null == undefined); //true , why? because both represent absence of value

console.log(null === undefined)//false, because they are of different types, how ? because null is of type object and undefined is of type undefined

//NaN is not equal to anything, including itself

//why?  because NaN represents an undefined or unrepresentable value in mathematics, so it doesn't make sense to say that two undefined values are equal.
console.log(NaN == NaN); //false
console.log(NaN === NaN); //false
console.log(isNaN(NaN)); //true, what is happening here? isNaN is a function that checks if a value is NaN

//Object.is() method
//Object.is() method determines whether two values are the same value.

//is this from comparison operators topic? no, but it's related to equality operators
console.log(Object.is(3, 3)); // is this equality operator? yes, it checks for value and type equality, how? because it returns true only if both values are of the same type and have the same value
console.log(Object.is(3, '3')); //false
console.log(Object.is(NaN, NaN)); //true, why? because Object.is() method considers NaN to be the same as NaN
console.log(Object.is(0, -0)); //false, why? because Object.is() method considers 0 and -0 to be different values

//is there anything important to learn in comparison opoerator now? no, but remember the difference between == and ===, and remember that NaN is not equal to anything, including itself
//and remember that null and undefined are only equal to themselves and each other
//and remember that Object.is() method can be used to check for value and type equality, and it considers NaN to be the same as NaN
//and it considers 0 and -0 to be different values

//!= and !==
console.log(3 != 2); //true
console.log(3 !== 2); //true 
console.log(3 != '3'); //false
console.log(3 !== '3'); //true, why? because != checks for value equality and !== checks for value and type equality

//what do you think, is that enough for comparison operators? yes, it is enough for now

//Can you give popular interview questions on comparison operators? yes, here are some popular interview questions on comparison operators
//1. What is the difference between == and ===?
//2. What is the result of NaN == NaN and NaN === NaN?
//3. What is the result of null == undefined and null === undefined?
//4. What is the result of 0 == false and 0 === false?
//5. What is the result of Object.is(NaN, NaN) and Object.is(0, -0)?
//6. What is the difference between != and !==?
//7. How does JavaScript handle type coercion in comparison operators?
//8. What are some common pitfalls when using comparison operators in JavaScript?
//9. How can you avoid type coercion issues when comparing values in JavaScript?
//10. Can you explain the concept of "truthy" and "falsy" values in JavaScript and how they relate to comparison operators?
//11. What is the difference between relational operators and equality operators in JavaScript?
//12. How does the behavior of comparison operators differ when comparing primitive values versus objects in JavaScript?
//13. What is the result of comparing two different types of values using relational operators in JavaScript?
//14. How does the behavior of comparison operators differ in strict mode versus non-strict mode in JavaScript?
//15. Can you explain the concept of "type coercion" in JavaScript and how it affects the behavior of comparison operators?
//16. What is the result of comparing two objects using equality operators in JavaScript?
//17. How can you compare two arrays for equality in JavaScript?
//18. What is the result of comparing two functions using equality operators in JavaScript?
//19. How does the behavior of comparison operators differ when comparing strings versus numbers in JavaScript?
//20. Can you explain the concept of "loose" and "strict" equality in JavaScript and how it relates to comparison operators?
//21. What is the result of comparing two different types of values using equality operators in JavaScript?
//22. How can you compare two dates for equality in JavaScript?
//23. What is the result of comparing two different types of values using relational operators in JavaScript?
//24. How does the behavior of comparison operators differ when comparing null and undefined in JavaScript?
//25. Can you explain the concept of "type coercion" in JavaScript and how it affects the behavior of relational operators?
//26. What is the result of comparing two different types of values using relational operators in JavaScript?
//27. How can you compare two objects for equality in JavaScript?
//28. What is the result of comparing two different types of values using equality operators in JavaScript?
//29. How does the behavior of comparison operators differ when comparing boolean values versus numbers in JavaScript?
//30. Can you explain the concept of "truthy" and "falsy" values in JavaScript and how they relate to relational operators?
//31. What is the result of comparing two different types of values using relational operators in JavaScript?
//32. How can you compare two strings for equality in JavaScript?
//33. What is the result of comparing two different types of values using equality operators in JavaScript?
//34. How does the behavior of comparison operators differ when comparing objects versus primitive values in JavaScript?
//35. Can you explain the concept of "loose" and "strict" equality in JavaScript and how it relates to relational operators?
//36. What is the result of comparing two different types of values using relational operators in JavaScript?
//37. How can you compare two functions for equality in JavaScript?
//38. What is the result of comparing two different types of values using equality operators in JavaScript?
//39. How does the behavior of comparison operators differ when comparing arrays versus primitive values in JavaScript?
//40. Can you explain the concept of "type coercion" in JavaScript and how it affects the behavior of equality operators?

//Answers to the above questions.

//1. == checks for value equality, while === checks for value and type equality.
//2. Both NaN == NaN and NaN === NaN return false, because NaN is not equal to anything, including itself.
//3. null == undefined returns true, while null === undefined returns false, because they are of different types.
//4. 0 == false returns true, while 0 === false returns false, because they are of different types.
//5. Object.is(NaN, NaN) returns true, while Object.is(0, -0) returns false, because Object.is() method considers NaN to be the same as NaN and 0 and -0 to be different values.
//6. != checks for value inequality, while !== checks for value and type inequality.
//7. JavaScript performs type coercion when comparing values of different types, which can lead to unexpected results.
//8. Common pitfalls include using == instead of ===, comparing different types of values, and not understanding type coercion.
//9. To avoid type coercion issues, use === and !== for comparisons, and ensure that the values being compared are of the same type.
//10. "Truthy" values are values that evaluate to true in a boolean context, while "falsy" values evaluate to false. This affects comparison operators because falsy values can lead to unexpected results when compared to truthy values.
//11. Relational operators compare the order of values (e.g., greater than, less than), while equality operators check for equality or inequality.
//12. When comparing primitive values, comparison operators check the actual values, while when comparing objects, they check for reference equality (i.e., whether they refer to the same object in memory).
//13. When comparing different types of values using relational operators, JavaScript performs type coercion to convert the values to a common type before comparison.
//14. In strict mode, JavaScript enforces stricter parsing and error handling, which can affect the behavior of comparison operators, especially with type coercion.
//15. Type coercion is the automatic or implicit conversion of values from one type to another, which can affect the behavior of comparison operators by leading to unexpected results when comparing different types of values.
//16. When comparing two objects using equality operators, the result is true only if they refer to the same object in memory.
//17. To compare two arrays for equality, you need to compare their lengths and each corresponding element, as arrays are reference types.  
//18. When comparing two functions using equality operators, the result is true only if they refer to the same function in memory.
//19. When comparing strings versus numbers, JavaScript performs type coercion to convert the string to a number before comparison.
//20. "Loose" equality refers to the use of == and !=, which perform type coercion, while "strict" equality refers to the use of === and !==, which do not perform type coercion.