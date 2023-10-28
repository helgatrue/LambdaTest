const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    supportFile: false,
    specPattern: [
      "cypress/integration/e2e/spec.cy.js",
    ]
  }
})