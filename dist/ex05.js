"use strict";
// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }
function generateSummary(users) {
    //active
    let sum = 0;
    users.forEach((person) => {
        if (person.active === true) {
            sum += 1;
        }
    });
    //age
    let avg = 0;
    users.forEach((person) => {
        avg += person.age;
    });
    avg = avg / users.length;
    console.log({ activeCount: sum, averageAge: avg });
}
// Expected output:
generateSummary([
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true }
]);
// { activeCount: 2, averageAge: 32.5 }
