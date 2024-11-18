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
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-norwegian-salmon/fresh-norwegian-salmon-without-skin-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-norwegian-salmon/fresh-norwegian-salmon-with-skin-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-norwegian-salmon/fresh-norwegian-salmon-fillet-without-skin',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-norwegian-salmon/fresh-norwegian-salmon-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-squid/fresh-squid-rings',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-squid/fresh-squid-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-shingada/fresh-shingada-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-shingada/fresh-shingada-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-shark-fish/fresh-shark-fish-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-shark-fish/fresh-shark-fish-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-shark-fish/fresh-shark-fish-whole-pack-of-2-fish',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-shark-fish/fresh-shark-fish-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-hilsa/fresh-hilsa-bengali-cut',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-hilsa/fresh-hilsa-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-bombay-duck/fresh-bombay-duck-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-black-pomfret/fresh-black-pomfret-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-black-pomfret/fresh-black-pomfret-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-anchovies-silver/fresh-anchovies-silver-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-anchovies-silver/fresh-anchovies-silver-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-anchovies-silver/fresh-anchovies-silver-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-anchovies-gold/fresh-anchovies-gold-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-anchovies-gold/fresh-anchovies-gold-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-anchovies-gold/fresh-anchovies-gold-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-steaks-with-head-&-tail',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-steaks-with-head-tail',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-whole-cleaned',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-whole-pack-of-2-fish',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-steaks-with-head-tail',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-steaks-with-head-&-tail',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-whole-cleaned',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-whole-pack-of-3-fish',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-seer-fish/fresh-seer-fish-fillet',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-seer-fish/fresh-seer-fish-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rawas/fresh-indian-salmon-fillet',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rawas/fresh-indian-salmon-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-roopchand/fresh-roopchand-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-roopchand/fresh-roopchand-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sole/fresh-sole-fillet',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sole/fresh-sole-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-bengali-cut',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-steak',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-ompak-pabda/fresh-ompak-pabda-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-ompak-pabda/fresh-ompak-pabda-whole-cleaned',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-catla/fresh-catla-bengali-cut',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-catla/fresh-catla-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia/fresh-tilapia-fillet',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia/fresh-tilapia-moon-cut-pack-of-2-fish',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia/fresh-tilapia-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-indian-basa/fresh-indian-basa-fillet'
    ];

    cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    //   cy.reload({ timeout: 100000 });

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
