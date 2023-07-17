const fs = require('fs');
const inquirer = require('inquirer');

const questions = [
  {
    type: 'list',
    name: 'shape',
    message: 'Select a shape:',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    name: 'letters',
    message: 'Please type in a set of letters',
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the color of the shape:',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the color of the text:',
  },
];

function writeToFile(filename, content) {
  fs.writeFile(filename, content, function (error) {
    if (error) {
      return console.log(error);
    }
    console.log('Generated SVG Logo');
  });
}

function generateLogo(data) {
  // Logic to generate the logo based on the provided data
  // Replace with your own implementation
  return 'Logo content goes here';
}

function init() {
  inquirer.prompt(questions).then(function (data) {
    var filename = 'svg.logo';
    var content = generateLogo(data);
    writeToFile(filename, content);
  });
}

init();
