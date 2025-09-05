/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

/*
let result = "5" - 2;
console.log("The result is: " + result);

let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

*/

//Part 1: Debugging Challenge:
// Original line: let result = "5" - 2;
// The subtraction operator triggers implicit conversion of "5" to number 5 automatically,
// so this actually works, but clearer code uses explicit conversion.
let result = Number("5") - 2;  
// Explicit conversion with Number() clarifies intent and avoids accidental string concatenation.
console.log("The result is: " + result); // Correct output: The result is: 3

// Original line: let isValid = Boolean("false");
// In JavaScript, any non-empty string is truthy, so Boolean("false") is true.
// To check boolean value from a string "false", an explicit check is needed.
let isValid = ("false" === "true"); 
// Now isValid will be false because "false" !== "true".
if (isValid) {
    console.log("This is valid!");  // Won’t run now, which is correct.
} else {
    console.log("This is not valid!");  // This will run.
}

// Original line: let age = "25";
// let totalAge = age + 5;
// The + operator with a string performs concatenation, so "25" + 5 = "255" (string).
// Use explicit Number() conversion to correctly sum numbers.
let age = "25";
let totalAge = Number(age) + 5; 
console.log("Total Age: " + totalAge);  // Correct: Total Age: 30



// Part 2 : Examples of type conversion:
// Implicit type conversion example (coercion):
let implicitResult = "10" + 5;  
// Number 5 is automatically converted to string "5" and concatenated.
console.log(`Implicit conversion ("10" + 5):`, implicitResult, typeof implicitResult);  
// Output: "105", type string


// Explicit type conversion example:
let explicitResult = Number("10") + 5;  
// String "10" explicitly converted to number 10 before addition.
console.log(`Explicit conversion Number("10") + 5:`, explicitResult, typeof explicitResult);  
// Output: 15, type number


// Edge case with NaN:
let edgeCase = Number("abc");  // Invalid number string converts to NaN.
console.log(`Explicit conversion Number("abc") yields:`, edgeCase, typeof edgeCase);  
// Output: NaN, type number
