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
        'https://cambaytigerstage-nh.farziengineer.co/product/rawas-mini-combo/rawas-mini-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/surmai-mini-combo/surmai-mini-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-chicken-combo/mutton-chicken-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-chicken-tilapia-tika-combo/mutton-chicken-tilapia-tika-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-chicken-tilapia-combo/mutton-chicken-tilapia-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-lrg-prawns-combo/chicken-lrg-prawns-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-prawns-combo/chicken-prawns-combo',
'https://cambaytigerstage-nh.farziengineer.co/product/red-thai-curry/red-thai-curry',
'https://cambaytigerstage-nh.farziengineer.co/product/red-thai-curry/red-thai-curry',
'https://cambaytigerstage-nh.farziengineer.co/product/kerala-moilee-curry/kerala-moilee-curry',
'https://cambaytigerstage-nh.farziengineer.co/product/chingri-malai-curry/chingri-malai-curry',
'https://cambaytigerstage-nh.farziengineer.co/product/kawan-tawa-paratha/kawan-tawa-paratha',
'https://cambaytigerstage-nh.farziengineer.co/product/kawan-whole-wheat-paratha/kawan-whole-wheat-paratha',
'https://cambaytigerstage-nh.farziengineer.co/product/kawan-onion-paratha/kawan-onion-paratha',
'https://cambaytigerstage-nh.farziengineer.co/product/kawan-flakey-paratha/kawan-flakey-paratha',
'https://cambaytigerstage-nh.farziengineer.co/product/kawan-malabar-paratha/kawan-malabar-paratha',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-chilli-lime-marinade/chef-currated-chilli-lime-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-chilli-lime-marinade/chef-curated-chilli-lime-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-chilli-garlic-marinade/chef-curated-chilli-garlic-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-chilli-garlic-marinade/chef-currated-chilli-garlic-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-pahadi-marinade/chef-currated-pahadi-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-pahadi-marinade/chef-curated-pahadi-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-butter-garlic-marinade/chef-currated-butter-garlic-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-butter-garlic-marinade/chef-curated-butter-garlic-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-tikka-marinade/chef-currated-tikka-marinade'
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
