/// <reference types="Cypress" />

describe("My second test suite", () => {
  it("My second test case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();

    //window:alert
    cy.on("window:alert", (string) => {
      expect(string).to.equal("Hello , share this practice page and share your knowledge");
    });

    //window:confirm
    cy.on("window:confirm", (string) => {
      expect(string).to.equal("Hello , Are you sure you want to confirm?");
    });

    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");
  });
});
