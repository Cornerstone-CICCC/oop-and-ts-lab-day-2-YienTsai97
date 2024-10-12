"use strict";
// Create a function `logDetails` that accepts either a tuple of a string and number, or a number and string.
// - Use function overloading and type guards to log different formats based on the input types.
// - Return type: void.
function logDetails(data) {
    let result = "";
    if (typeof data[0] === "number" && typeof data[1] === "string") {
        result = `ID: ${data[0]}, Name: ${data[1]}`;
    }
    if (typeof data[0] === "string" && typeof data[1] === "number") {
        result = `Name: ${data[0]}, Age: ${data[1]}`;
    }
    console.log(result);
}
// Expected output:
logDetails(["Alice", 30]); // "Name: Alice, Age: 30"
logDetails([42, "Alice"]); // "ID: 42, Name: Alice"
