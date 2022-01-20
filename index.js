// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter a title:',
        },
        {
           type: 'input',
           name: 'description',
           message: 'Enter a description:', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter the installation instruction:',
        },
        {
            type: 'input',
            name: 'usageInformation',
            message: 'Enter the usage information',
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Enter the contribution guidelines',
        },
        {
            type: 'input',
            name: 'test',
            message: 'Enter the test instructions',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What type of license would you like?',
            choices: ["MIT License", "Apache", "BSD", "None"],
        },
    ]);
};

// TODO: Create a function to write README file
const generateMd = ({title, description,installation,usageInformation,guidelines,test,github,email,license}) =>
`
# ${title}

## Table of Contents
1. [Description](#Description)
2. [Installation](#Installation)
3. [Usage](#Usage)
4. [Contribution Guidline](#Contribution)
5. [Test Instruction](#Test)
6. [Questions](#Questions)
7. [License](#License)


## Description:
${description}

## Installation:
${installation}

## Usage:
${usageInformation}

## Contribution:
${guidelines}

## Test:
### Make sure to use the terminal and enter ${test}.

## Questions:
### Feel free to contact me on GitHub or by email.
[GitHub](github.com/${github})    
${email}

## License:
${license} 




`

// TODO: Create a function to initialize app
//  Fix to make new MD file
const init = () => {
    questions()
        .then((answers) => fs.writeFileSync('Professional.md', generateMd(answers)))
        .then (() => console.log('Professional.md has been updated'))
        .catch((err => console.error(err)))
}; 

// Function call to initialize app
init();

// ? Enter a title: Professional README 
// ? Enter a description: This allows the user to answer a series of questions regarding their project.
// ? Enter the installation instruction: npm i
// ? Enter the usage information not sure
// ? Enter the contribution guidelines self project
// ? Enter the test instructions node ./index.js
// ? What is your GitHub username? ChonaC
// ? What is your email address? sample@email.com
