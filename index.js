const inquirer = require('inquirer');
const { writeFile, readFile } = require('fs/promises');
const {Circle, Square, Triangle} = require('./lib/shapes.js');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Please choose up to 3 characters for the logo:',
        //validate max of 3 characters allowed will not proceed otherwise
        validate: function(text) {
            if (text.length <= 3) {
                return true;
            } else {
                console.log("\nEnter max of 3 characters");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'color',
        message: 'Please enter the text color (color keyword or #hexadecimal):',
    },
    {
        type: 'input',
        name: 'objColor',
        message: 'Please enter the shape\'s color (color keyword or #hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Please choose a shape for the logo',
        choices: ['Circle', 'Square', 'Triangle']
    }
]


//create shape SVG data
function createSVGData({text, color, objColor, shape}) {
    let svg = '';
    switch (shape) {
        case 'Circle': 
            svg = new Circle(text, color, objColor);
            break;
        case 'Square':
            svg = new Square(text, color, objColor);
            break;
        case 'Triangle':
            svg = new Triangle(text, color, objColor);
            break;
        default:
            throw new Error("Invalid Shape");
    }
    return svg.render();
}

function init() {
    inquirer
        .prompt(questions)
        .then((res) => {
            const svg = createSVGData(res);
            writeFile(`./examples/logo.svg`, svg);
            return console.log("Generated logo.svg");
        })
        .catch((err) => console.log(err))
}


init();