


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '9cqbzv', // Cypress Dashboard project ID

  defaultCommandTimeout: 200000, // Default timeout for Cypress commands
  pageLoadTimeout: 120000, // Page load timeout

  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Location of your test files
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // Add custom events or plugins here, if needed
    },
  },

  video: false, // Disable video recording

  reporter: 'cypress-mochawesome-reporter', // Use the Mochawesome reporter
  reporterOptions: {
    reportDir: 'cypress/reports', // Directory for the reports
    charts: true, // Display charts in the report
    reportPageTitle: 'My Test Suite', // Set a custom page title for the report
    embeddedScreenshots: true, // Embed screenshots in the report
    inlineAssets: true, // Use inline assets for the report
  }
});
