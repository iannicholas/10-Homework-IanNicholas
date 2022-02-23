const Engineer = require("../lib/Engineer");

test ("creates an engineer object", () => {
  const engineer = new Engineer("Ian Nicholas", 31789, "inicholas8686@gmail.com", "iannicholas");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test ("gets engineer github", () => {
  const engineer = new Engineer("Ian Nicholas", 31789, "inicholas8686@gmail.com", "iannicholas");
  expect(engineer.getGithub()).toEqual(expect.any(String));
});

test ("gets engineer status", () => {
  const engineer = new Engineer("Ian Nicholas", 31789, "inicholas8686@gmail.com", "iannicholas");
  expect(engineer.getStatus()).toBe("Engineer");
});