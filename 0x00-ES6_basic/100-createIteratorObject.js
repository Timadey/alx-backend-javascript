export default function createIteratorObject (report) {
  return employeeIterator(report);
};

function * employees (dept) {
  for (const employee of dept) {
    yield employee;
  }
}

function * employeeIterator (report) {
  const allEmployees = report.allEmployees;
  for (const department in allEmployees) {
    yield* employees(allEmployees[`${department}`]);
  }
}
