"use strict";
// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.
function addValues(values) {
    if (values.every(ele => typeof ele === "number")) {
        let sum = 0;
        values.forEach((num) => {
            sum = sum + num;
        });
        console.log(sum);
    }
    if (values.every(ele => typeof ele === "string")) {
        let newArr = values.filter((ele) => ele != " ");
        let result = newArr.join(' ');
        console.log(result);
    }
}
// Expected output:
addValues([1, 2, 3]); // 6
addValues(["Hello", " ", "World"]); // "Hello World"
