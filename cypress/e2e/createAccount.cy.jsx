describe("Create Account, Should Create Account", () => {
  beforeEach(() => {
    cy.visit("/createaccount");
  });

  it("should successfully create a new account", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="phoneNumber"]').type("1234567890");
    cy.get('input[name="password"]').type("securePassword");
    cy.get('input[name="repeatPassword"]').type("securePassword");

    cy.get("[data-testid=create-account-button]").click();

    // Check if the user is redirected to the login page
    cy.url().should("include", "/login");
  });
});


describe("Create Account, 'Passwords do not match' error", () => {
  beforeEach(() => {
    cy.visit("/createaccount");
  });

  it("should display an error for password mismatch", () => {
    cy.get('input[name="firstName"]').type("John");
    cy.get('input[name="lastName"]').type("Doe");
    cy.get('input[name="email"]').type("john.doe@example.com");
    cy.get('input[name="phoneNumber"]').type("1234567890");
    cy.get('input[name="password"]').type("securePassword");
    cy.get('input[name="repeatPassword"]').type("incorrectPassword"); // Intentionally mismatched password

    cy.get("[data-testid=create-account-button]").click();

    // Check if the error message for password mismatch is displayed
    cy.contains("Passwords do not match.").should("be.visible");

    // Check if the URL remains on the create account page (adjust the path based on your application)
    cy.url().should("include", "/createaccount");
  });
});