// Create two interfaces `Developer` and `Manager`. Both have a `name` but only the `Manager` has a `team`.
// - Create a function `promoteToManager` that takes a `Developer` and a team name, and returns a new object that includes both roles.
// - Return type: an intersection type combining `Developer` and `Manager`.

interface Developer {
  name: string;
  skills: string[];
}

interface Manager {
  name: string;
  team: string;
}


interface Promoted extends Developer, Manager { }


function promoteToManager(dev: Developer, team: string) {
  const promoted: Promoted = {
    name: dev.name,
    skills: dev.skills,
    team: team
  }
  console.log(promoted)
  return promoted
}

// Expected output:
promoteToManager({ name: "Alice", skills: ["TypeScript", "React"] }, "Frontend Team")
// { name: "Alice", skills: ["TypeScript", "React"], team: "Frontend Team" }