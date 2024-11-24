export default function createIteratorObject(report) {
  const employeesList = [];

  for (const value of Object.values(report.allEmployees)) {
    employeesList.push(...value);
  }
  return employeesList;
}
