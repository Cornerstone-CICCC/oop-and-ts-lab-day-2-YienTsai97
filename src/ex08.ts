// Create an interface `Company` that contains a `name`, `address`, and `employees`.
// - Use `Partial` to update any part of the company, including nested `employees` objects.
// - Return type: updated `Company` object.

interface Employee {
  name: string;
  role: string;
  salary: number;
}

interface Company {
  name: string;
  address: string;
  employees: Employee[];
}

function updateCompany<T extends Company, U extends { employees: [{ name?: string, role?: string, salary?: number }] }>(company: T, updates: U): T {

  company.employees[0].name = updates.employees[0].name ?? company.employees[0].name
  company.employees[0].role = updates.employees[0].role ?? company.employees[0].role
  company.employees[0].salary = updates.employees[0].salary ?? company.employees[0].salary


  console.log(company)
  return company
}

// Expected output:
const company = { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Developer", salary: 100000 }] };
updateCompany(company, { employees: [{ name: "Alice", role: "Senior Developer" }] })
// { name: "TechCorp", address: "123 St", employees: [{ name: "Alice", role: "Senior Developer", salary: 100000 }] }