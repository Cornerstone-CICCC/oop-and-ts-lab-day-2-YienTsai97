// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }

interface User {
  name: string;
  age: number;
  active: boolean;
}

function generateSummary(users: User[]): void {

  //active
  let sum: number = 0
  users.forEach((person) => {
    if (person.active === true) {
      sum += 1
    }
  })

  //age
  let avg: number = 0
  users.forEach((person) => {
    avg += person.age
  })
  avg = avg / users.length

  console.log({ activeCount: sum, averageAge: avg })
}

// Expected output:
generateSummary([
  { name: "Alice", age: 30, active: true },
  { name: "Bob", age: 25, active: false },
  { name: "Charlie", age: 35, active: true }
])
// { activeCount: 2, averageAge: 32.5 }