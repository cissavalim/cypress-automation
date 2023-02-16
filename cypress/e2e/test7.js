/// <reference types="Cypress" />

describe("My second test suite", () => {
  it("My second test case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#opentab").then(($el) => {
      const url = $el.prop("href");
      cy.log(url);
    });
  });
});
