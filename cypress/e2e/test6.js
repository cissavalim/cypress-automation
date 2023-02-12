/// <reference types="Cypress" />

describe("My second test suite", () => {
  it("My second test case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get(".mouse-hover-content").invoke("show");
    cy.contains("Top").click({ force: true });
    cy.url().should("include", "top");
  });
});
