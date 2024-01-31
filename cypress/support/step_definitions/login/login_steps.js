// const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

// When("I visit duckduckgo.com", () => {
//   cy.visit("https://duckduckgo.com/");
// });

// Then("I should see a search bar", () => {
//   cy.get("input[type=text]")
//     .should("have.attr", "placeholder")
//     .and(
//       "match",
//       /Search the web without being tracked|Search without being tracked/
//     );

//   assert.deepEqual({}, {});
// });




// // step_definitions.js
// const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// import DuckDuckGoPage from "./duckduckgoPage";

// const duckDuckGoPage = new DuckDuckGoPage();

// When("I visit duckduckgo.com", () => {
//   duckDuckGoPage.visit();
// });

// Then("I should see a search bar", () => {
//   duckDuckGoPage.getSearchBar()
//     .should("have.attr", "placeholder")
//     .and(
//       "match",
//       /Search the web without being tracked|Search without being tracked/
//     );

//   assert.deepEqual({}, {});
// });




import '@shelex/cypress-allure-plugin';

// support/step_definitions/login_steps/duckduckgo.js
const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// import DuckDuckGoPage from "../../pages/Login_Page/Login_Page"; // Adjust the path accordingly
import LoginPage from "../../pages/login_page/login_page"; // Import the Login_Page

// const duckDuckGoPage = new LoginPage();
const loginPage = new LoginPage(); // Create an instance of the Login_Page

When("I visit duckduckgo.com", () => {
  loginPage.visit();
});

Then("I should see a search bar", () => {
  loginPage.getSearchBar()
    .should("have.attr", "placeholder")
    .and(
      "match",
      /Search the web without being tracked|Search without being tracked/
    );

  assert.deepEqual({}, {});
});



Then("find appropriate title", () => {
  loginPage.getTitle()
    // .should("have.attr", "placeholder")
    .contains('online');;

  assert.deepEqual({}, {});
});
