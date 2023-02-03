const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "m9a8h7",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/*.js",
  },
});
