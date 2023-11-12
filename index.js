const inquirer = require('inquirer');
const fs = require('fs/promises');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please choose 3 characters for the logo:',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter the text color:',
    },
    {
        type: 'input',
        name: 'objColor',
        message: 'Please enter the shape\'s color:',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for the logo',
        choices: ['Circle', 'Square', 'Rectangle', 'Triangle']
    }
]
function init() {
    inquirer
        .prompt(questions)
        .then()
        .catch((err) => console.log(err))
}

init();