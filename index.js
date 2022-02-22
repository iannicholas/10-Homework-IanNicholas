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
  return inquirer.prompt([
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
      name: "office",
    }
  ])
  .then(managerAnswers => {
    const {name, id, email, office} = managerAnswers;
    const leader = new Manager (name, id, email, office);
    team.push(leader);
    console.log(leader);
  })
};

// add employee prompts
const addEmployee = () => {
  return inquirer.prompt([
    {
      type: "list",
      message: "What is the employees status?",
      name: "status",
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
      when: (input) => input.status === "Engineer", 
    },
    {
      type: "input",
      message: "Which school does the Intern attend?",
      name: "school",
      // ask question if Intern
      when: (input) => input.status === "Intern", 
    }
  ])

  .then(employeeData => {
    let {name, id, email, role, github, school} = employeeData;
    let employee;
    if(role === "Engineer") {
      employee = nem Engineer (name, id, email, github);
      console.log(employee);
    } else if(role === "Intern") {
      employee = new Intern (name, id, email, school);
      console.log(employee);
    }
    team.push(employee);
    return team;
  })
};

managerQuestions() 
    .then(addEmployee)
    // .then((data) => writeToFile("index.html", generateMarkdown(data)))
    // .catch(callFailure);

function callFailure() {
  console.log("Something went wrong!");
}