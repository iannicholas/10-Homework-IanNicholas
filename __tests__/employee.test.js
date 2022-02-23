const Employee = require("./lib/Employee");

test ("creates an employee object", () => {
  const employee = new Employee("Ian Nicholas", 31789, "inicholas8686@gmail.com");
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})

test ("gets employee name", () => {
  const employee = new Employee("Ian Nicholas", 31789, "inicholas8686@gmail.com");
  expect(employee.getName()).toEqual(expect.any(String));
})

test ("gets employee id", () => {
  const employee = new Employee("Ian Nicholas", 31789, "inicholas8686@gmail.com");
  expect(employee.getId()).toEqual(expect.any(Number));
})

test ("gets employee email", () => {
  const employee = new Employee("Ian Nicholas", 31789, "inicholas8686@gmail.com");
  expect(employee.getEmail()).toEqual(expect.any(String));
})

test ("gets employee status", () => {
  const employee = new Employee("Ian Nicholas", 31789, "inicholas8686@gmail.com");
  expect(employee.getStatus()).toEqual(expect.any("Employee"));
});