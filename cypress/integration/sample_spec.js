describe("The Home Page", () => {
  it("successfully loads a spaces detail page", () => {
    cy.visit("/"); // change URL to match your dev URL

    cy.contains("Visit space").click();

    cy.url().should("include", "/spaces/");
  });

  it("successfully logs in a user", () => {
    cy.visit("/"); // change URL to match your dev URL

    cy.contains("Login").click();

    cy.get("#formBasicEmail").type("domenico@codaisseur.com");
    cy.get("#formBasicPassword").type("1234");

    cy.contains("Log in").click();

    cy.get(".logged-in-nav-item").contains("domenico@codaisseur.com");
  });

  it("successfully creates in a user", () => {
    const email = "domenico" + Date.now() + "@codaisseur.com";

    cy.visit("/"); // change URL to match your dev URL

    cy.contains("Login").click();

    cy.contains("Click here to sign up").click();

    cy.get("#formBasicEmail").type(email);
    cy.get("#formBasicName").type("Dom");
    cy.get("#formBasicPassword").type("1234");

    cy.contains("Sign up").click();

    cy.get(".logged-in-nav-item").contains(email);
  });
});
