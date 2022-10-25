const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const team = []

const createManager = () => {
   inquirer.prompt ([
   {
      type: 'input',
      name: 'name',
      message: 'Please enter the name of your team manager.'
   },
   {
      type: 'input',
      name: 'id',
      message: 'Please enter the manager\'s ID number.'
   },
   {   
      type: 'input',
      name: 'email',
      message: 'Please enter the manager\'s email address.'
   },
   {   
      type: 'input',
      name: 'officenum',
      message: 'Please enter the manager\'s office number.'
   },
   ])
   .then((managerAnswers) => {
      const {name, id, email, officenum} = managerAnswers;
      const manager = new Manager(name, id, email, officenum);

      team.push(manager);
      console.log(manager);
   })
}

const createEmployee = () => {
   inquirer.prompt ([
      {
         type: "list",
         name: "role",
         message: "What is the role of your nest employee?",
         choices: ["Engineer", "Intern"]
      },
      {
         type: "input",
         name: "name",
         message: "What is your employees name?"
      },
      {
         type: "input",
         name: "id",
         message: "What is your employees ID number?"
      },
      {
         type: "input",
         name: "email",
         message: "What is your employees email?"
      },
      {
         type: 'input',
         name: 'github',
         message: "Please enter the employee's github username.",
         when: (input) => input.role === "Engineer"
      },
      {
         type: 'input',
         name: 'school',
         message: "Please enter the intern's school",
         when: (input) => input.role === "Intern"
      }
      
   ])
   .then((employeeAnswers) => {
      let {name, id, email, github, school} = employeeAnswers;
      let employee;

      if (role === "Engineer"){
         employee = new Engineer (name, id, email, github);
         console.log(employee)
      } else if (role === "Intern") {
         employee = new Intern (name, id, email, school);
         console.log(employee)
      }
      team.push(employee);
   })
}