const fs = require('fs');
const inquirer = require('inquirer');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const htmlTemplate = require("./src/htmlTemplate");
const outputFile = "./dist/index.html";

const team = [];

const roleQuestion = [ // Questions to ask for role
    {
        type: 'list',
        name: 'role',
        message: "What is the team member's role?",
        choices: ['Manager', 'Engineer', 'Intern'],
        default: 'Manager'
    }
]

const init = () => { // Initializes set of questions
    inquirer
        .prompt(roleQuestion) // Asks for role of member
        .then((role) => {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the team member's name?",
                        validate: name => {
                            if(name) {
                                return true;
                            } else {
                                console.log("Please enter valid name.")
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: "What is the team member's ID?",
                        validate: id => {
                            if(id) {
                                return true;
                            } else {
                                console.log("Please enter valid ID.")
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the team member's email?",
                        validate: email => {
                            if(email) {
                                return true;
                            } else {
                                console.log("Please enter valid name.")
                                return false;
                            }
                        }
                    },
                    {
                        when: () => role.role === "Manager", // Asks manager-specific question
                        type: "number",
                        name: "officeNum",
                        message: "What is their office number?",
                        validate: officeNum => {
                            if(officeNum) {
                                return true;
                            } else {
                                console.log("Please enter valid name.")
                                return false;
                            }
                        }
                    },
                    {
                        when: () => role.role === "Engineer", // Asks engineer-specific question
                        type: "input",
                        name: "github",
                        message: "What is their github username?",
                        validate: github => {
                            if(github) {
                                return true;
                            } else {
                                console.log("Please enter a valid username.")
                                return false;
                            }
                        }
                    },
                    {
                        when: () => role.role === "Intern", // Asks intern-specific question
                        type: "input",
                        name: "school",
                        message: "What school do they go to?",
                        validate: school => {
                            if(school) {
                                return true;
                            } else {
                                console.log("Please enter valid school name.")
                                return false;
                            }
                        }
                    },
                    {
                        type: 'confirm', // Asks if user would like to add another team member
                        message: 'Would you like to add another team member?',
                        name: 'addAnother'
                    }
                ])
                .then(data => {
                    if(role.role === "Manager") {
                        const manager = new Manager(data.name,data.id,data.email,data.officeNum);
                        team.push(manager);
                    };
                    if(role.role === "Engineer") {
                        const engineer = new Engineer(data.name,data.id,data.email,data.github);
                        team.push(engineer);
                    };
                    if(role.role === "Intern") {
                        const intern = new Intern(data.name,data.id,data.email,data.school);
                        team.push(intern);
                    };

                    if(data.addAnother) { // If user selected yes to add team member, runs function again
                        init();
                    } else (
                        fs.writeFile(outputFile, htmlTemplate(team), (err) =>
                        err ? console.error(err) : console.log('File generated!'))
                    )
                })
        })
}

init()