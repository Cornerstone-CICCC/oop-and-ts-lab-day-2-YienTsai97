// Create a generic function `mergeObjects` that takes two objects and merges them.
// - The objects should have a mandatory `id` field.
// - Allow partial updates to one of the objects using `Partial`.
// - Use constraints to enforce the `id` field.
// - Return type: merged object with both original and updated fields.

interface Identifiable {
  id: number;
}

function mergeObjects<T extends Partial<Identifiable>, U extends { name: string }>(obj1: T, obj2: U): void {
  let result = {
    id: obj1.id,
    name: obj2.name
  }
  console.log(result)
}

// Expected output:
mergeObjects({ id: 1, name: "Alice" }, { name: "Bob" })
// { id: 1, name: "Bob" }