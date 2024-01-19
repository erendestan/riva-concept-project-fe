import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // Specify the end-to-end test files pattern
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

    // Other end-to-end testing configurations...

    // Example: Setting a base URL
    baseUrl: 'http://127.0.0.1:5173', // Replace with your actual base URL
  },
});