/// <reference types="Cypress" />

describe("My first test suite", () => {
  it("My first test case", () => {
    cy.visit("https://rahulshettyacademy.com/seleniumPractise");
    cy.get(".search-keyword").type("ca");
    cy.get(".products").find(".product").should("have.length", 4);
    cy.get(".products")
      .find(".product")
      .eq(1)
      .contains("ADD TO CART")
      .click()
      .then(() => {
        console.log("sf");
      });
    cy.get(".products").as("productLocator");
    cy.get("@productLocator")
      .find(".product")
      .each(($el, $index, $list) => {
        const textVeg = $el.find("h4.product-name").text();
        if (textVeg.includes("Cashews")) {
          cy.wrap($el).find("button").click();
        }
      });
    cy.get(".brand").should("have.text", "GREENKART");
    const logo = cy.get(".brand").then((logoelement) => {
      cy.log(logoelement.text());
    });
  });
});
