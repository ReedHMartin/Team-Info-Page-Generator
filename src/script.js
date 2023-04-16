// Import Inquirer 
const inquirer = require('inquirer');

// Import modules from Node.js
const fs = require('fs');
const path = require('path');

// Import classes from 'lib' folder
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// TODO: Create an array to store the team members
let teamMembers = [];

// TODO: Create a function to initialize the application
function init() {
  // TODO: Call the function to prompt for the manager's information
  promptManager();
}

// TODO: Call the init() function to start the application
init();

// TODO: Create a function to render the  HTML cards for each team member
function renderEmployeeCard(teamMember) {
    // TODO: Call the method or function to generate the HTML card based on role
  
    // TODO: Return the generated HTML card as a string
  }

  // TODO: Create function to generate the final HTML output
function generateHTML(teamMembers) {
    // TODO: Use renderEmployeeCard function to generate HTML cards for each team member
    // and join them into a single string
  
    // TODO: Combine rendered HTML cards with an HTML template to create the final HTML output
  
    // TODO: Return the final HTML output as a string
  }

  // TODO: Create a function to save the generated HTML to a file in the dist folder
function saveHTML(html) {
    // TODO: Use the fs module to write the final HTML output to a file in the dist folder
  
    // TODO: Log a message to the console indicating that the file has been saved successfully
  }
  
  // TODO: Update the function for prompting to add more team members or finish building the team
function promptAddTeamMember() {
    // TODO: Use Inquirer to prompt the user to add an engineer, an intern, or finish building the team
  
    // TODO: Based on the user's choice, call the appropriate function (promptEngineer, promptIntern, or generate the final HTML output)
  
    // TODO: If the user decides to finish building the team, call the generateHTML function to create the final HTML output

    // TODO: Call the saveHTML function to save the output to to dist folder
  }