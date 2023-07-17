// Import required libraries
const fs = require('fs');
const path = require('path')
const { Circle, Triangle, Square } = require('./lib/shapes');
const SVG = require ('./lib/svg.js');
const inquirer = require('inquirer');
// const questions = require('./questions');


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
    message: 'Please type in  3 letters',
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


  inquirer.prompt(questions).then(function (data) {
    var filename = 'logo.svg';
    let shape;
    if (data.shape === "circle")  {
      shape = new Circle();
    }  else if (data.shape === "Triangle") {
      shape = new Triangle();

    } else {
      shape = new Square();

    }

    shape.setColor(data.shapeColor);

    const svg = new SVG();

    svg.setText(data.letters,data.textColor)
    svg.setShape(shape)

    fs.writeFileSync("Logo.svg", svg.render())

  })



// init();























// // Define the logo generator function
// function generateLogo(shape, size, color, outputPath) {
//   const canvasSize = size * 2; // The canvas will be twice the size of the shape to fit it comfortably
//   const canvas = createCanvas(canvasSize, canvasSize);
//   const ctx = canvas.getContext('2d');

//   // Set the background color
//   ctx.fillStyle = 'white';
//   ctx.fillRect(0, 0, canvasSize, canvasSize);

//   // Set the shape properties
//   ctx.fillStyle = color;
//   ctx.strokeStyle = color;
//   ctx.lineWidth = 2;

//   // Draw the shape based on the chosen option
//   if (shape === 'circle') {
//     const radius = size;
//     ctx.beginPath();
//     ctx.arc(canvasSize / 2, canvasSize / 2, radius, 0, Math.PI * 2, false);
//     ctx.fill();
//     ctx.stroke();
//   } else if (shape === 'square') {
//     const halfSize = size / 2;
//     ctx.fillRect(canvasSize / 2 - halfSize, canvasSize / 2 - halfSize, size, size);
//     ctx.strokeRect(canvasSize / 2 - halfSize, canvasSize / 2 - halfSize, size, size);
//   } else if (shape === 'triangle') {
//     const halfSize = size / 2;
//     ctx.beginPath();
//     ctx.moveTo(canvasSize / 2, canvasSize / 2 - halfSize); // Top point
//     ctx.lineTo(canvasSize / 2 - halfSize, canvasSize / 2 + halfSize); // Bottom-left point
//     ctx.lineTo(canvasSize / 2 + halfSize, canvasSize / 2 + halfSize); // Bottom-right point
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
//   } else {
//     console.log('Invalid shape. Please choose "circle", "square", or "triangle".');
//     return;
//   }

//   // Save the generated SVG logo to a file
//   const svgString = canvas.toBuffer().toString();
//   fs.writeFileSync(outputPath, svgString, 'utf8');
//   console.log(`Logo saved to ${outputPath}`);
// }

// // Usage example
// generateLogo('circle', 50, 'red', 'logo.svg');

