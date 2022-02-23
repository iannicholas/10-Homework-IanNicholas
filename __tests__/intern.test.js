const Intern = require("../lib/Intern");

test ("creates an intern object", () => {
  const intern = new Intern("Ian Nicholas", 31789, "inicholas8686@gmail.com", "UCSD");
  expect(intern.school).toEqual(expect.any(String));
});

test ("gets intern school", () => {
  const intern = new Intern("Ian Nicholas", 31789, "inicholas8686@gmail.com", "UCSD");
  expect(intern.getSchool()).toEqual(expect.any(String));
});

test ("gets intern status", () => {
  const intern = new Intern("Ian Nicholas", 31789, "inicholas8686@gmail.com", "UCSD");
  expect(intern.getStatus()).toEqual("Intern");
});