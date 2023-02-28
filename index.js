const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

async function chooseStaff(){
let {staff} = await inquirer

.prompt([
    {   type: 'list',
        name: 'staff',
        message: 'Choose one staff for your project',
        choices: ['Manager', 'Engineer', 'Intern', 'Finished building the team'],

    },

    ])

    function generateTeam(staff){
        if(staff === 'Manager'){
        chooseManager()
    }else if(staff === 'Engineer'){
        chooseEngineer()
        
    }else if(staff === 'Intern'){
        chooseIntern()

    }else if(staff === 'Finished building the team'){
    let htmlDoc = render(team)
    
    fs.writeFile(outputPath, htmlDoc);

    }
    }
    
    generateTeam(staff)

}


// Manager function *****************************

async function chooseManager(){
    let {name, id, email, officeNumber} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your manager name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your manager id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your manager email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your manager office number?",
        },])
        chooseStaff()
    return team.push(new Manager (name, id, email, officeNumber));
        
}


// Engineer function *****************************

async function chooseEngineer(){
    let {name, id, email, github} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your engineer name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your engineer id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your engineer email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer gitHub profile?",
        },])
        chooseStaff()
    return team.push(new Engineer (name, id, email, github));
        
}

// Intern function *****************************

async function chooseIntern(){
    let {name, id, email, school} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is your intern name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your intern id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your intern email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school?",
        },])
        chooseStaff()
    return team.push(new Intern (name, id, email, school));
        
}

chooseStaff();






    