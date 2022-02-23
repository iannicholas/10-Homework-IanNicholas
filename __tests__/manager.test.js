const Manager = require("./lib/Manager");

test("creates manager odject", () => {
  const manager = new Manager("Ian Nicholas", 31789, "inicholas8686@gmail.com", 1202);
  expect(manager.office).toEqual(expect.any(Number));
})

test("gets status", () => {
  const manager = new Manager("Ian Nicholas", 31789, "inicholas8686@gmail.com", 1202);
  expect(manager.getStatus()).toEqual("Manager");
})