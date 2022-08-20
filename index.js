const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const renderHTML = require('./src/generateHTML');

const employees = [];
let employeeCards = '';

let managerQuestions = [
    {type: 'input', name: 'name', message: `What is the Manager's name?`},
    {type: 'input', name: 'id', message: `What is the Manager's id?`},
    {type: 'input', name: 'email', message: `What is the Manager's email?`},
    {type: 'input', name: 'officeno', message: `What is the Manager's office number?`},
];

let engineerQuestions = [
    {type: 'input', name: 'name', message: `What is the Engineer's name?`},
    {type: 'input', name: 'id', message: `What is the Engineer's id?`},
    {type: 'input', name: 'email', message: `What is the Engineer's email?`},
    {type: 'input', name: 'github', message: `What is the Engineer's Github?`},
];

let internQuestions = [
    {type: 'input', name: 'name', message: `What is the Intern's name?`},
    {type: 'input', name: 'id', message: `What is the Intern's id?`},
    {type: 'input', name: 'email', message: `What is the Intern's email?`},
    {type: 'input', name: 'school', message: `What is the Intern's school?`},
];

let addRole = [
    {type: 'list', name: 'add', message: `Add another employee?`, choices: ['Engineer', 'Intern', 'Finished']},
];

function addEmployee() {
    inquirer.prompt(addRole).then((answer) => {
        if (answer.add == 'Engineer') {
            createEngineer();
        } else if (answer.add == 'Intern') {
            createIntern();
        } else {
            generateHTML(employeeCards);
        }
    })
}

function createManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
        const { name, id, email, officeno } = answers;
        const manager = new Manager(name, id, email, officeno);
        const position = manager.position;

        employees.push(manager);

        createCard(position, name, id, email, officeno);
        addEmployee();
    })
}

function createEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const { name, id, email, github } = answers;
        const engineer = new Engineer(name, id, email, github);
        const position = engineer.position;

        employees.push(engineer);

        createCard(position, name, id, email, github);
        addEmployee();
    })
}

function createIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
        const { name, id, email, school } = answers;
        const intern = new Intern(name, id, email, school);
        const position = intern.position;

        employees.push(intern);

        createCard(position, name, id, email, school);
        addEmployee();
    })
}

function createCard(position, name, id, email, other) {
    employeeCards +=
`<div class="card">
<div class="card-header">
<h2 id="employee-name">${name}</h2>
<h3 id="job-title">`;
    if (position == 'Manager') {
        employeeCards += `<i class="fa fa-briefcase"></i>`;
    } else if (position == 'Engineer') {
        employeeCards += `<i class="fa fa-glasses"></i>`;
    } else {
        employeeCards += `<i class="fa fa-graduation-cap"></i>`
    };
        employeeCards +=
`${position}</h2>
</div>
<div class="card-body">
<ul>
<li><strong>ID: </strong> ${id}</li>
<li><strong>Email: </strong> <a href='mailto:${email}'>${email}</a></li>\n`;

    if (position == 'Manager') {
        employeeCards +=
`<li><strong>Office number: </strong> ${other}</li>
</ul>
</div>
</div>\n`
    } else if (position == 'Engineer') {
        employeeCards +=
`<li><strong>Github: </strong> <a href='https://github.com/${other}' target='_blank'>${other}</a></li>
</ul>
</div>
</div>\n`
    } else {
        employeeCards +=
`<li><strong>School: </strong> ${other}</li>
</ul>
</div>
</div>\n`
    };
}

function generateHTML(employeeCards) {
    renderHTML(employeeCards);
}

createManager();