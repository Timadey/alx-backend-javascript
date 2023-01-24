export default function iterateThroughObject(reportWithIterator) {
  const report = reportWithIterator;
  const emp = [];
  for (let employee = report.next(); !employee.done; employee = report.next()) {
    emp.push(employee.value);
  }
  return emp.join(' | ');
}
