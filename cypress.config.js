const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth:  1000, 
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
