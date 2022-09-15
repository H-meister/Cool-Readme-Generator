// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// function renderLicenseBadge(license) {
//     if (license === 'MIT') {
//         return '(https://img.shields.io/badge/License-MIT-yellow.svg)]'
//     }
//     else if (license === 'Apache') {
//         return '(https://img.shields.io/badge/License-Apache_2.0-blue.svg)]'
//     }
//     else if (license === 'IBM') {
//         return '(https://img.shields.io/badge/License-IPL_1.0-blue.svg)]'
//     }
//     else if (license === 'Mozilla') {
//         return '(https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]'
//     }
//     else {
//         return ''
//     }
// }

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {
//     if (license === 'MIT') {
//         return '(https://opensource.org/licenses/MIT)'
//     }
//     else if (license === 'Apache') {
//         return '(https://opensource.org/licenses/Apache-2.0)'
//     }
//     else if (license === 'IBM') {
//         return '(https://opensource.org/licenses/IPL-1.0)'
//     }
//     else if (license === 'Mozilla') {
//         return '(https://opensource.org/licenses/MPL-2.0)'
//     }
//     else {
//         return ''
//     }
// }

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//     if (license === 'MIT') {
//         return '[![License: MIT]'
//     }
//     else if (license === 'Apache') {
//         return '[![License]'
//     }
//     else if (license === 'IBM') {
//         return '[![License: IPL 1.0]'
//     }
//     else if (license === 'Mozilla') {
//         return '[![License: MPL 2.0]'
//     }
//     else {
//         return ''
//     }
// }

// function addingLink() {
//     renderLicenseSection(MIT);

// }

// TODO: Create a function to generate markdown for README
function generateReadMe(answers) {
    return `
   # ${answers.projectName}
   ## Table of Contents
   * [📚Description](#Description)
   * [🔑Installation](#Installation)
   * [🧻Usage](#Usage)
   * [🩹Contributing](#Contributing)
   * [📏Tests](#Tests)
   * [✔Questions](#Questions)
   ---
   ## 📚Description
   #### ${answers.projectDescription}
   ---
   ## 🔑Installation
   #### ${answers.instInstructions}
   ---
   ## 🧻Usage
   #### ${answers.usageInformation}
   ---
   ## 🩹Contributing
   #### ${answers.contGuidlines}
   ---
   ## 📏Tests
   #### ${answers.testInstructions}
   ---
   ## ✔Questions
   ---
   ### Reach me with additional questions here!
   * [My Github!](https://www.github.com/${answers.github})
   * [My E-Mail!](mailto:${answers.email})
    `;
};
module.exports = generateReadMe;
// module.exports = renderLicenseSection;
// module.exports = renderLicenseLink;
// module.exports = renderLicenseBadge;