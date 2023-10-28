const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.lambdatest.com/selenium-playground/',
    supportFile: false,
    specPattern: [
      "cypress/integration/e2e/spec.cy.js",
    ]
  }
})