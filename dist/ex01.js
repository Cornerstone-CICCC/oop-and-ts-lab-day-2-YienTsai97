"use strict";
// Create a function `transformInput` that accepts either a string or a number. 
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.
function transformInput(x) {
    if (typeof x === "number") {
        for (let i = x - 1; i >= 1; i--) {
            x = x * i;
        }
        console.log(x);
        return x;
    }
    if (typeof x === "string") {
        x = x.split('').reverse().join('');
        console.log(x);
        return x;
    }
    else {
        throw new Error(`input type should be string or number`);
    }
}
// Expected output:
transformInput("TypeScript"); // "tpircSepyT"
transformInput(5); // 120
