// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require('./src/readme-template')

// TODO: Create an array of questions for user input
const questions = [
{
    type : 'input',
    name : 'projectName',
    message : 'What is your projects name?'
},
{
    type : 'input',
    name : 'projectDescription',
    message : 'Please write a short description of your project.'
},
{
    type : 'input',
    name : 'instInstructions',
    message : 'Please write installation instructions for your project.'
},
{
    type : 'input',
    name : 'usageInformation',
    message : 'Please write information on how your app functions.'
},
{
    type : 'input',
    name : 'contGuidlines',
    message : 'Please write how to contriute to the projects.'
},
{
    type : 'input',
    name : 'testInstructions',
    message : 'Please write any testing instructions.'
},
{
    type : 'list',
    name : 'badgeList',
    message : 'What kind of license do you want your project to have?',
    choices : ['MIT', 'Apache','IBM','Mozilla']
},
{
    type : 'input',
    name : 'github',
    message : 'Please enter your github username'
},
{
    type : 'input',
    name : 'email',
    message : 'Please enter your e-mail'
}
];
// TODO: Create a function to write README file
function writeToFile(filename, data) {
   fs.writeFile(filename, data, err => err ? console.log(err) : console.log('Readme Generated!'));

}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function (answers) {
        //do stuff with the answers
        console.log(answers);
        //after all answers are collected, write to file!
        //todo - build a string that uses our answers to generate
        //some markdown, and write that to our file as the 'data paramater.
        //(replace the test values below)
      writeToFile('./README.md', generateReadMe(answers));
    });

}

// Function call to initialize app
init();
