const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');





async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));


  require('cypress-mochawesome-reporter/plugin')(on);


  allureWriter(on, config);

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://duckduckgo.com",
    specPattern: "**/*.feature",
    setupNodeEvents,
  },

  defaultCommandTimeout: 10000, // Set the default timeout to 10 seconds


//   reporter: 'cypress-mochawesome-reporter',

//   video: false,

//   reporterOptions: {

//     charts: true,

//     reportPageTitle: 'Cypress Inline Reporter',

//     embeddedScreenshots: true, 

//     inlineAssets: true, //Adds the asserts inline

// "reportDir": "cypress/report",

//   },



// reporter: 'cypress-mochawesome-reporter',
//   e2e: {
//     setupNodeEvents(on, config) {
//       require('cypress-mochawesome-reporter/plugin')(on);
//     },
//   },


reporter: 'cypress-mochawesome-reporter',



"cypress-cucumber-preprocessor": {
  "stepDefinitions": "cypress/support/step-defination/*.js",
  "filterSpecs": true,
  "omitFiltered": true,
  "json": {
    "enabled": true,
    "formatter": "cucumber-json-formatter",
    "output": "cypress/reports/json/cucumber-report.json"
 }
}



});


