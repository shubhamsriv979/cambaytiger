


const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: '9cqbzv', // Cypress Dashboard project ID
    
    defaultCommandTimeout: 60000, // Default timeout for Cypress commands
    pageLoadTimeout: 500000, // Page load timeout
    chromeWebSecurity: false, // Disable Chrome web security for cross-origin iframes


  e2e: {
    viewportWidth: 1000,   // Set width here
    viewportHeight: 660,   // Set height here
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}', // Location of your test files
    setupNodeEvents(on, config) {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // Add custom events or plugins here, if needed
    },
  },

  video: true, // Disable video recording

  // reporter: 'cypress-mochawesome-reporter', // Use the Mochawesome reporter
  // reporterOptions: {
  //   reportDir: 'cypress/reports', // Directory for the reports
  //   charts: true, // Display charts in the report
  //   reportPageTitle: 'My Test Suite', // Set a custom page title for the report
  //   embeddedScreenshots: true, // Embed screenshots in the report
  //   inlineAssets: true, // Use inline assets for the report
  // }
});
