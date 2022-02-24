// require markup page
const buildMarkup = require("./src/buildMarkup");

// module variables
const inquirer = require("inquirer");
const fs = require("fs");

// import other js files
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Employee = require("./lib/Employee");
const Intern = require("./lib/Intern");

// array
const team = [];

// manager prompts
const managerQuestions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "What is the managers name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the managers employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the managers email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the managers office number?",
        name: "officeNumber",
      },
    ])
    .then((managerAnswers) => {
      const { name, id, email, officeNumber } = managerAnswers;
      const leader = new Manager(name, id, email, officeNumber);
      team.push(leader);
      console.log(leader);
    });
};

// add employee prompts
const addEmployee = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What is the employees status?",
        name: "getRole",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        message: "What is the employees name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employees ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employees email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the employees GitHub username?",
        name: "github",
        // ask question if Engineer
        when: (input) => input.getRole === "Engineer",
      },
      {
        type: "input",
        message: "Which school does the Intern attend?",
        name: "school",
        // ask question if Intern
        when: (input) => input.getRole === "Intern",
      },
      {
        type: "confirm",
        name: "addMember",
        message: "Would you like to another team member?",
      },
    ])

    .then((employeeData) => {
      let { name, id, email, getRole, github, school, addMember } =
        employeeData;
      let employee;
      if (getRole === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else if (getRole === "Intern") {
        employee = new Intern(name, id, email, school);
        console.log(employee);
      }
      team.push(employee);
      // return team;
      if (addMember) {
        return addEmployee(team);
      } else {
        return team;
      }
    });
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team members have been successfully added.");
    }
  });
};

managerQuestions()
  .then(addEmployee)
  .then((team) => {
    return buildMarkup(team);
  })
  .then((pageHTML) => {
    return writeFile(pageHTML);
  })
  .catch((error) => {
    console.log(error);
  });
