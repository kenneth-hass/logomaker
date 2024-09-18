const fs = require('fs');
// Pulling the node filing system

const inquirer = require('inquirer');
  // getting the inquirer npm.

const {Circle, Square, Triangle} = require('./lib/shapes');
  // bringing in the shapes js file from the lib

  const questions = [
    {
        type: 'input',
        name: 'text',

        message: 'Enter a maximum of 3 characters',

        validate: (text) => {

            if(text.length <= 3) {

            return(true) 

            } else {return'Enter up to 3 letters'}
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a text color'
    },
    {
        type: 'list',
        name: 'shape',

        message: 'Select a shape',
        choices: ['circle', 'square', 'triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a shape color'},
];

// makes the questions that allow a user to select the characters inside the shape as well as its  color and type.
inquirer
.prompt(questions)

.then((answers) => {
    let shape;

    if(answers.shape === 'circle') {
        shape = new Circle();
    }

    if(answers.shape === 'square') {
        shape = new Square();
    }

    if(answers.shape === 'triangle') {
        shape = new Triangle();
    }
    shape.setColor(answers.shapeColor);

const svgFile = `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
${shape.render()}

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>`

fs.writeFile('SVG-Generator.svg', svgFile, (err) => {

    if(err) throw err;

    console.log('File created successfully.');

});
})