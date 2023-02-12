/// <reference types="Cypress" />

describe("My second test suite", () => {
  it("My second test case", () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");

    cy.get("table[name='courses'] tr td:nth-child(2)").each(($el, index, $list) => {
      const text = $el.text();
      if (text.includes("Python")) {
        cy.get("table[name='courses'] tr td:nth-child(2)")
          .eq(index)
          .next()
          .should(($price) => {
            expect($price.text()).to.equal("25");
          });
      }
    });
  });
});
