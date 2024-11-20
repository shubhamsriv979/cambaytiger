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
'https://cambaytiger.com/product/fresh-norwegian-salmon-dil-and-garlic/fresh-norwegian-salmon-in-dil-garlic-fillet',
'https://cambaytiger.com/product/kids-special-pack/kids-special-pack',
'https://cambaytiger.com/product/grill-master-pack/grill-master-pack',
'https://cambaytiger.com/product/supreme-tiger-pack/supreme-tiger-pack',
'https://cambaytiger.com/product/sizzling-prawn-delight/sizzling-prawn-delight',
'https://cambaytiger.com/product/peoples-choice-pack/peoples-choice-pack',
'https://cambaytiger.com/product/farm-fresh-treats/farm-fresh-treats',
'https://cambaytiger.com/product/mutton-starter-pack/mutton-starter-pack',
'https://cambaytiger.com/product/dawat-e-special/dawat-e-special',
'https://cambaytiger.com/product/mutton-medley/mutton-medley',
'https://cambaytiger.com/product/protein-power-pack/protein-power-pack',
'https://cambaytiger.com/product/tandoori-and-curry-meal/tandoori-curry-meal',
'https://cambaytiger.com/product/tikka-trio-platter/tikka-trio-platter',
'https://cambaytiger.com/product/assorted-tandoori-platter/assorted-tandoori-platter',
'https://cambaytiger.com/product/chicken-carnival-pack/chicken-carnival-pack',
'https://cambaytiger.com/product/tandoori-fusion/tandoori-fusion',
'https://cambaytiger.com/product/mixed-chicken-grill/mixed-chicken-grill',
'https://cambaytiger.com/product/sunday-brunch-special/sunday-brunch-special',
'https://cambaytiger.com/product/kuk-doo-koo-pack/kuk-doo-koo-pack',
'https://cambaytiger.com/product/party-starter-pack/party-starter-pack',
'https://cambaytiger.com/product/protein-rich-meal/protein-rich-meal',
'https://cambaytiger.com/product/dinner-special/dinner-special',
'https://cambaytiger.com/product/boneless-delights/boneless-delights',
'https://cambaytiger.com/product/soulful-dua-pack/soulful-duo-pack',
'https://cambaytiger.com/product/ultimate-fish-feast/ultimate-fish-feast'

    ];

    cy.visit('https://cambaytiger.com');
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
