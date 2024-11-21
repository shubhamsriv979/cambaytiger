let failedUrls = []; // Array to track failed URLs
Cypress.on('fail', (error, runnable) => {
  // Add any custom behavior during failure, e.g., logging the error
  cy.task('log', `Test failed: ${runnable.title}`);
  throw error; // Re-throw the error to fail the test
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Template Spec', () => {

  it('Task Loop', () => {
    const product_urls = [
        'https://farzistore-nh.farziengineer.co/product/freshly-frozen-norwegian/freshly-frozen-norwegian-salmon-chunks-skinless',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-surmai-steaks/freshly-frozen-surmai-steaks',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-pomfret-whole/freshly-frozen-pomfret-whole',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-tuna-saku/freshly-frozen-tuna-saku',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-basa-chunks-400g/freshly-frozen-basa-chunks-400g',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-basa-chunks-250g/freshly-frozen-basa-chunks-250g',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-jumbo-prawns-300g/freshly-frozen-jumbo-prawns-300g',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-small-prawns-300g/freshly-frozen-small-prawns-300g',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-large-prawns-300g/freshly-frozen-large-prawns-300g',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-medium-prawns-600g/freshly-frozen-medium-prawns-600g',
'https://farzistore-nh.farziengineer.co/product/freshly-frozen-medium-prawns-300g/freshly-frozen-medium-prawns-300g',
'https://farzistore-nh.farziengineer.co/product/mutton-raan/mutton-raan',
'https://farzistore-nh.farziengineer.co/product/mutton-nalli/mutton-nalli',
'https://farzistore-nh.farziengineer.co/product/mutton-chops/mutton-chops',
'https://farzistore-nh.farziengineer.co/product/mutton-mince-kheema/mutton-mince-kheema',
'https://farzistore-nh.farziengineer.co/product/mutton-boneless-chunks/mutton-boneless-chunks',
'https://farzistore-nh.farziengineer.co/product/mutton-curry-cut/mutton-curry-cut',
'https://farzistore-nh.farziengineer.co/product/chicken-wings/chicken-wings',
'https://farzistore-nh.farziengineer.co/product/chicken-thigh-boneless/chicken-thigh-boneless',
'https://farzistore-nh.farziengineer.co/product/chicken-mince-kheema/chicken-mince-kheema',
'https://farzistore-nh.farziengineer.co/product/chicken-lollypop/chicken-lollypop',
'https://farzistore-nh.farziengineer.co/product/chicken-leg/chicken-leg',
'https://farzistore-nh.farziengineer.co/product/chicken-drumsticks/chicken-drumsticks',
'https://farzistore-nh.farziengineer.co/product/chicken-curry-cut/chicken-curry-cut',
'https://farzistore-nh.farziengineer.co/product/chicken-breast-boneless/chicken-breast-boneless'
    ];

    cy.visit('https://farzistore-nh.farziengineer.co');
    Membership.closeAdvPopup();

    // select location 
    cy.wait(10000);
    cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Bangalore", { delay: 100, force: true });
    cy.wait(10000);
    cy.get('.AdressCont__inside > :nth-child(1) > div').click();
    cy.wait(10000);

    // Loop through each product URL and test
    product_urls.forEach((product_url) => {
      cy.visit(product_url, { timeout: 500000, failOnStatusCode: false });

      cy.get('body').then((body) => {
        // you-may-also-like heading in valid pdp
        const locator_heading = "div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] li:nth-child(1) a:nth-child(1)";

        // Check if the 404 error or continue button is present
        if (body.find(locator_heading).length === 0) {
          // Log error message
          cy.log("404 Page Not Found error detected.");
          failedUrls.push(product_url);  // Add failed URL to the array

        }
      });
    });
  });

  // Log all failed URLs after the test suite is complete
  after(() => {
    if (failedUrls.length > 0) {
      // Log failed URLs regardless of the test outcome
      cy.task('log', "The following URLs failed:");
      failedUrls.forEach(url => cy.task('log', url));
      // throw new Error("One or more URLs failed."); // Explicitly fail the test suite
      cy.get("Some Urls contains 404 page", { timeout: 1000 });
    } else {
      cy.task('log', "All URLs passed successfully."); // Always log success
    }
  });




});
