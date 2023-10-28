const {defineConfig} = require('cypress')

module.exports = defineConfig({
    projectId: 'a1',
    video: true,
    videoCompression: true,
    e2e: {
        baseUrl: 'https://www.lambdatest.com/selenium-playground/',
        supportFile: false,
        specPattern: [
            "cypress/integration/e2e/spec.cy.js",
        ],
        setupNodeEvents(on, config) {
            on('task', {
              log(message) {
                console.log(message);
                return null;
              },
            });
          },
    }
})