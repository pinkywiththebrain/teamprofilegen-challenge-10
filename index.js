const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHTML = require("./src/generateHTML")

const team = []

const createManager = () => {
   inquirer.prompt ([
   {
      type: 'input',
      name: 'name',
      message: "Please enter your team manager's name.",
      validate: input => {
         if (input) {
             return true;
         } else {
             console.log ("Please enter your team manager's name.");
             return false; 
         }
      },
   },
   {
      type: 'input',
      name: 'id',
      message: "Please enter the team manager's ID number.",
      validate: input => {
         if (isNaN(input)) {
            console.log (" Please enter a valid number.");
             return false;
         } else {
             return true;
         }
      },
   },
   {   
      type: 'input',
      name: 'email',
      message: "Please enter the team manager's email address.",
      validate: input => {
         if (input) {
             return true;
         } else {
             console.log ("Please enter the team manager's email address.");
             return false; 
         }
      },
   },
   {   
      type: 'input',
      name: 'officenum',
      message: "Please enter the manager's office number.",
      validate: input => {
         if (isNaN(input)) {
            console.log (" Please enter a valid number.");
             return false;
         } else {
             return true;
         }
      },
   },
   ])
   .then((managerAnswers) => {
      const {name, id, email, officenum} = managerAnswers;
      const manager = new Manager(name, id, email, officenum);

      team.push(manager);
      console.log(manager);
      menu();
   })
   .catch(err => console.log(err))
}

const menu = () => {
   inquirer.prompt ([
       {
         type: "list",
         name: "role",
         message: "What is the role of your next employee?",
         choices: ["Engineer", "Intern", "Finish and Build Team"]
      }
   ])
   .then((input) => {
      if (input.role === "Engineer"){
         addEngineer()
      } else if (input.role === "Intern"){
         addIntern()
      } else {
        fs.writeFile("./dist/index.html", generateHTML(team), err => console.log(err))
      }
   })
}

const addEngineer = () => {
   inquirer.prompt ([
      {
         type: "input",
         name: "name",
         message: "What is your engineer's name?",
         validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter the engineer's name.");
                return false; 
            }
         },
      },
      {
         type: "input",
         name: "id",
         message: "What is your engineer's ID number?",
         validate: input => {
            if (isNaN(input)) {
               console.log (" Please enter a valid number.");
                return false;
            } else {
                return true;
            }
         },
      },
      {
         type: "input",
         name: "email",
         message: "What is your engineer's email?",
         validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter the engineer's email address.");
                return false; 
            }
         },
      },
      {
         type: 'input',
         name: 'github',
         message: "Please enter the engineer's github username.",
         validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter the engineer's email address.");
                return false; 
            }
         },
      }
   ])
   .then((engineerAnswers) => {
      const {name, id, email, github} = engineerAnswers;
      const engineer = new Engineer(name, id, email, github);

      team.push(engineer);
      console.log(engineer);
      menu();
   })
}

const addIntern = () => {
   inquirer.prompt ([
      {
         type: "input",
         name: "name",
         message: "What is your intern's name?",
         validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter the intern's name.");
                return false; 
            }
         },
      },
      {
         type: "input",
         name: "id",
         message: "What is your intern's ID number?",
         validate: input => {
            if (isNaN(input)) {
               console.log (" Please enter a valid number.");
                return false;
            } else {
                return true;
            }
         },
      },
      {
         type: "input",
         name: "email",
         message: "What is your intern's email?",
         validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter the intern's email address.");
                return false; 
            }
         },
      },
      {
         type: 'input',
         name: 'school',
         message: "Please enter the intern's school",
         validate: input => {
            if (input) {
                return true;
            } else {
                console.log ("Please enter the intern's school.");
                return false; 
            }
         },
      }
   ])
   .then((internAnswers) => {
      const {name, id, email, school} = internAnswers;
      const intern = new Intern(name, id, email, school);

      team.push(intern);
      console.log(intern);
      menu();
   })
}
createManager()

