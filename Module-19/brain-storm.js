/*
 * Task 1
 */
const groupByDepartment = (employees) => {
  if (!Array.isArray(employees)) {
    return "Invalid";
  }

  return employees.reduce((acc, employee) => {
    if (!acc[employee.department]) {
      acc[employee.department] = {
        employeeCount: 0,
        totalSalary: 0,
        averageSalary: 0,
      };
    } 
   acc[employee.department].employeeCount++;

    acc[employee.department].totalSalary += employee.salary;
    acc[employee.department].averageSalary =
      Number((acc[employee.department].totalSalary /
      acc[employee.department].employeeCount).toFixed(2))

    return acc;
  }, {});
};

const employees = [
  { name: "Rahim", department: "IT", salary: 50000 },
  { name: "Karim", department: "HR", salary: 40000 },
  { name: "Sakib", department: "IT", salary: 70000 },
  { name: "Tamim", department: "Finance", salary: 60000 },
  { name: "Rafi", department: "HR", salary: 45000 },
  { name: "Nabil", department: "IT", salary: 55000 },
];
console.log(groupByDepartment(employees));
