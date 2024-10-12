// Create an interface `Team` that contains a readonly `name` and `members` array.
// - Use `Partial` to allow updates to the `members`.
// - Return type: `Team` after applying partial updates.

interface Team {
  readonly name: string;
  members: { name: string; role: string }[];
}

function updateTeam<T extends Partial<Team>, U extends { members: { name: string; role: string }[] }>(team: T, updates: U): void {
  team.members = []
  team.members.push(updates.members[0])
  console.log(team)
}

// Expected output:
const team: Partial<Team> = { name: "Dev Team", members: [{ name: "Alice", role: "Developer" }] };
updateTeam(team, { members: [{ name: "Bob", role: "Designer" }] })
// { name: "Dev Team", members: [{ name: "Bob", role: "Designer" }] }