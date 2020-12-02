// // array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


const inquirer = require('inquirer');
const fs = require('fs');

//Inquirer with all questions
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your project name?',
      name: 'projectName',
    },
    {
      type: 'input',
      message: 'Please write a short description of your project:',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What kind of licence should your project have?',
      name: 'licence',
    },
    {
      type: 'input',
      message: 'What command should be run to install dependencies?',
      name: 'commandDepend',
    }, 
    {
      type: 'input',
      message: 'What command should be run to test your project?',
      name: 'commandTest',
    },
    {
      type: 'input',
      message: 'What does the user need to know about using the repo?',
      name: 'useRepo',
    },
    {
      type: 'input',
      message: 'What does the user need to know about contributing to the repo?',
      name: 'contriRepo',
    },
    {
      type: 'input',
      message: 'What is the GitHub link of your repository?',
      name: 'githubLink',
    },
    {
      type: 'input',
      message: 'What is the GitHub live link of your project?',
      name: 'githubLive',
    },
  ])
  .then((response) => {
    //console log the inputs
    console.log('response:', response);

    //variable to create the readme.md structure file
    const readMe = `
# ${response.projectName}

## Links:

GitHub repository: ${response.githubLink}

Live link to access the application: ${response.githubLive}


## Information:

Project created by ${response.username}

${response.email}


## Description:

${response.description}


## Usage:

* To run this app you need to install dependencies using this command: ${response.commandDepend}

* To test this app you need to run this command: ${response.commandTest}

* Usage of this repository: ${response.licence}

* Contribution on this repository: ${response.licence}

* ${response.licence}


- - -

${response.username}
    `;
    //Create the readme file
    fs.writeFile('readme.md', readMe, (err) =>
    err
    ? console.error(err)
    : console.log('Success!')
    );
  });