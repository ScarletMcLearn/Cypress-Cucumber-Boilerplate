// duckduckgoPage.js
import { loginLocators } from '../../locators/login/login_locators';

class LoginPage {
    visit() {
      cy.visit("https://duckduckgo.com/");
    }
  
    getSearchBar() {
      return cy.get(
        // "input[type=text]"
        loginLocators.searchBar
        );
    }


    getTitle(){
      return cy.get(
        // '.legacy-homepage-variants_title__p1_T_'
        loginLocators.title
      );

    }

  }
  
  export default LoginPage;