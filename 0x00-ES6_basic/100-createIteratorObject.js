function* employees(dept) {
  for (const employee of dept) {
    yield employee;
  }
}

function* employeeIterator(report) {
  const { allEmployees } = report;
  for (const department in allEmployees) {
    if (Object.hasOwn(allEmployees, department)) {
      yield* employees(allEmployees[`${department}`]);
    }
  }
}

export default function createIteratorObject(report) {
  return employeeIterator(report);
}
