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
'https://cambaytiger.com/product/hearty-delights/hearty-delights',
'https://cambaytiger.com/product/seafood-starter-pack/seafood-starter-pack',
'https://cambaytiger.com/product/seafood-sensation/seafood-sensation',
'https://cambaytiger.com/product/oceanic-duo-deal/oceanic-duo-deal',
'https://cambaytiger.com/product/ocean-fresh-party-pack/ocean-fresh-party-pack',
'https://cambaytiger.com/product/seafood-feast-special/seafood-feast-special',
'https://cambaytiger.com/product/whole-chicken-with-skin/chicken-whole-with-skin',
'https://cambaytiger.com/product/fiery-desi-hot-wings/fiery-desi-hot-wings',
'https://cambaytiger.com/product/honey-sriracha-wings/honey-sriracha-wings',
'https://cambaytiger.com/product/achari-fish-tikka/achari-fish-tikka',
'https://cambaytiger.com/product/chicken-basil-tikka/chicken-basil-tikka',
'https://cambaytiger.com/product/chicken-tangdi-kebab/chicken-tangdi-kebab',
'https://cambaytiger.com/product/chicken-kalimiri-tikka/chicken-kalimiri-tikka',
'https://cambaytiger.com/product/chicken-malai-tikka/chicken-malai-tikka',
'https://cambaytiger.com/product/chicken-tandoori-boneless-breast/chicken-tandoori-boneless-breast',
'https://cambaytiger.com/product/chicken-tandoori-whole-leg/chicken-tandoori-whole-leg',
'https://cambaytiger.com/product/chicken-boneless-tikka/chicken-boneless-tikka',
'https://cambaytiger.com/product/mutton-mini-combo/mutton-mini-combo',
'https://cambaytiger.com/product/sole-prawns-combo/sole-prawns-combo',
'https://cambaytiger.com/product/sole-chicken-combo/sole-chicken-combo',
'https://cambaytiger.com/product/norwegian-salmon-combo/norwegian-salmon-combo',
'https://cambaytiger.com/product/pomfret-combo/pomfret-combo',
'https://cambaytiger.com/product/rawas-mini-combo/rawas-mini-combo',
'https://cambaytiger.com/product/surmai-mini-combo/surmai-mini-combo',
'https://cambaytiger.com/product/mutton-chicken-combo/mutton-chicken-combo'
    ];

    cy.visit('https://cambaytiger.com/');
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
