// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of the project?",
    },
    {
      type: "input",
      name: "description",
      message:
        "Provide a short description of the project; what, motivation, why etc. ",
    },
    {
      type: "input",
      name: "installation",
      message: "What installation(s) are needed for the project?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide some examples of usage in the project.",
    },
    {
      type: "list",
      name: "license",
      message: "Which open source license are you using?",
      choices: ["MIT", "GPLv3", "Unlicense"],
    },
    {
      type: "input",
      name: "contributing",
      message:
        "Provide some contributing guidelines for the project or link to template, GitHub file with instructions.",
    },
    {
      type: "input",
      name: "tests",
      message: "Provide example of how to run the project code.",
    },
    {
      type: "input",
      name: "questions",
      message: "Answer any user questions about the project or share FAQ link.",
    },
    {
      type: "input",
      name: "GitHub",
      message: "Provide GitHub username.",
    },
    {
      type: "input",
      name: "email",
      message: "Provide an email for contact.",
    },
  ]);
};

// TODO: Create a function to initialize app
function init() {
  questions()
    // TODO: Create a function to write README file
    .then((data) => {
      // console.log(data);
      const mdFile = ` # ${data.title}\n ## ${
        data.description
      }\n ## Table of Contents\n 1. [Title](#${
        data.title
      })\n 2. [Description](#${data.description})\n 3. [Installation](#${
        data.installation
      })\n 4. [Usage](#${data.usage})\n 5. [License](#${
        data.license
      })\n 6. [Contributing](#${data.contributing})\n 7. [Tests](#${
        data.tests
      })\n 8. [Questions](#${data.questions})\n ## ${data.installation}\n ## ${
        data.usage
      }\n  ## ${showLicenseBadge(
        data.license
      )}\n Click Badge icon for notice.\n ## ${data.contributing}\n  ## ${
        data.tests
      }\n ## ${
        data.questions
      }\n Visit my GitHub profile: [GitHub Profile](https://github.com/${
        data.GitHub
      })\n You can reach me at: [Email](${data.email}) `;

      //function to show correct license badge choice at top of README
      function showLicenseBadge(license) {
        if (license === "MIT") {
          return `[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)`;
        } else if (license === "GPLv3") {
          return `[![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)](http://perso.crans.org/besson/LICENSE.html)`;
        } else license === "Unlicense";
        return `[![Unlicense](https://img.shields.io/badge/License-Unlicense-blue.svg)](https://unlicense.org/)`;
      }

      fs.writeFile("./generator_output/README.md", mdFile, (err, data) => {
        err ? console.error(err) : console.log("Success!");
      });
    });
}
// // Function call to initialize app
init();
