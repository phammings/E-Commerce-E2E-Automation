export class RegisterPage {
  webLocators = {
    firstName: "#firstname",
    lastName: "#lastname",
    email: "#email_address",
    password: "#password",
    confirmPassword: "#password-confirmation",
    createAnAccountButton: ".action.submit.primary",
    successMessage: "Thank you for registering with Main Website Store.",
  };

  openURL() {
    cy.visit(Cypress.env("URL"));
  }

  enterFirstName(FName) {
    cy.get(this.webLocators.firstName).type(FName);
  }
  enterLastName(LName) {
    cy.get(this.webLocators.lastName).type(LName);
  }
  enterEmail(Email) {
    cy.get(this.webLocators.email).type(Email);
  }
  enterPassword(password) {
    cy.get(this.webLocators.password).type(password);
    cy.get(this.webLocators.confirmPassword).type(password);
  }
  enterCreateAnAccountButton() {
    cy.get(this.webLocators.createAnAccountButton).click();
  }
  successFullCreateAccountMessage() {
    cy.contains(this.webLocators.successMessage);
  }
}
