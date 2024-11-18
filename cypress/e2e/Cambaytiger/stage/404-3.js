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
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-amritsari-marinade/chef-currated-amritsari-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-amritsari-marinade/chef-curated-amritsari-marinade',
'https://cambaytigerstage-nh.farziengineer.co/product/country-eggs/country-eggs-pack-of-6-pcs',
'https://cambaytigerstage-nh.farziengineer.co/product/country-eggs/country-eggs',
'https://cambaytigerstage-nh.farziengineer.co/product/brown-eggs/brown-eggs-pack-of-6-pcs',
'https://cambaytigerstage-nh.farziengineer.co/product/brown-eggs/brown-eggs',
'https://cambaytigerstage-nh.farziengineer.co/product/classic-white-eggs/classic-white-eggs-pack-of-6-pcs',
'https://cambaytigerstage-nh.farziengineer.co/product/classic-white-eggs/classic-white-eggs',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-lemon-pepper-basa/freshly-frozen-lemon-pepper-basa',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-chilli-basil-basa/freshly-frozen-chilli-basil-basa',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-smoked-salmon/freshly-frozen-smoked-salmon',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-norwegian/freshly-frozen-norwegian-salmon-chunks-skinless',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-norwegian/freshly-frozen-norwegian',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-surmai-steaks/freshly-frozen-surmai-steaks',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-pomfret-whole/freshly-frozen-pomfret-whole',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-tuna-saku/freshly-frozen-tuna-saku',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-basa-chunks-400g/freshly-frozen-basa-chunks-400g',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-basa-chunks-250g/freshly-frozen-basa-chunks-250g',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-jumbo-prawns-300g/freshly-frozen-jumbo-prawns-300g',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-small-prawns-300g/freshly-frozen-small-prawns-300g',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-large-prawns-300g/freshly-frozen-large-prawns-300g',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-medium-prawns-600g/freshly-frozen-medium-prawns-600g',
'https://cambaytigerstage-nh.farziengineer.co/product/freshly-frozen-medium-prawns-300g/freshly-frozen-medium-prawns-300g',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-raan/mutton-raan',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-nalli/mutton-nalli',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-chops/mutton-chops',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-mince-kheema/mutton-mince-kheema',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-boneless-chunks/mutton-boneless-chunks',
'https://cambaytigerstage-nh.farziengineer.co/product/mutton-curry-cut/mutton-curry-cut',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-wings/chicken-wings',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-thigh-boneless/chicken-thigh-boneless',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-mince-kheema/chicken-mince-kheema',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-lollypop/chicken-lollypop',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-leg/chicken-leg',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-drumsticks/chicken-drumsticks',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-curry-cut/chicken-curry-cut',
'https://cambaytigerstage-nh.farziengineer.co/product/chicken-breast-boneless/chicken-breast-boneless',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-chilli-garlic-deveined-and-tail-on/fresh-large-prawns-in-chilli-garlic-deveined-cleaned-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-chilli-garlic-deveined-and-tail-on/fresh-large-prawns-in-chilli-garlic-deveined-&-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-chilli-lime-deveined-and-tail-on/fresh-large-prawns-in-chilli-lime-deveined-cleaned-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-chilli-lime-deveined-and-tail-on/fresh-large-prawns-in-chilli-lime-deveined-&-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-butter-garlic-deveined-and-tail-on/fresh-large-prawns-in-butter-garlic-deveined-cleaned-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-butter-garlic-deveined-and-tail-on/fresh-large-prawns-in-butter-garlic-deveined-&-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-pahadi-deveined-and-tail-on/fresh-large-prawns-in-pahadi-deveined-cleaned-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-pahadi-deveined-and-tail-on/fresh-large-prawns-in-pahadi-deveined-&-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-tikka-deveined-and-tail-on/fresh-large-prawns-in-tikka-deveined-cleaned-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-tikka-deveined-and-tail-on/fresh-large-prawns-in-tikka-deveined-&-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-amritrsari-deveined-and-tail-on/fresh-large-prawns-in-amritsari-deveined-cleaned-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-large-prawns-in-amritrsari-deveined-and-tail-on/fresh-large-prawns-in-amritrsari-deveined-&-tail-on',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-oysters/fresh-oysters',
'https://cambaytigerstage-nh.farziengineer.co/product/fresh-clams/fresh-clams',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-chilli-garlic/fresh-pomfret-medium-in-chilli-garlic',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-chilli-garlic/fresh-pomfret-medium-chilli-garlic',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-in-chilli-lime/fresh-pomfret-medium-in-chilli-lime',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-in-butter-garlic/fresh-pomfret-medium-in-butter-garlic',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-in-pahadi/fresh-pomfret-medium-in-pahadi',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-in-amritsari/fresh-pomfret-medium-in-amritsari',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium-in-tikka/fresh-pomfret-medium-in-tikka',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tuna/fresh-tuna-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-bass/fresh-sea-bass-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sardine/fresh-sardine-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-red-snapper/fresh-red-snapper-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-lady-fish/fresh-lady-fish-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-indian-mackerel/fresh-indian-mackerel-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-ghol/fresh-ghol-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-chinese-pomfret/fresh-chinese-pomfret-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-super/fresh-silver-pomfret-super-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tengra/fresh-tengra-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia-in-chilli-garlic/fresh-tilapia-in-chilli-garlic',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia-in-chilli-lime/fresh-tilapia-in-chilli-lime',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia-in-pahadi/fresh-tilapia-in-pahadi',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia-in-butter-garlic/fresh-tilapia-in-butter-garlic',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia-in-tikka/fresh-tilapia-in-tikka',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia-in-amritsari/fresh-tilapia-in-amritsari',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-tiger-prawns/fresh-sea-tiger-prawns-deveined-&-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-tiger-prawns/fresh-sea-tiger-prawns-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-tiger-prawns/fresh-sea-tiger-prawns-deveined-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-tiger-prawns/fresh-sea-tiger-prawns-deveined-cleaned-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-tiger-prawns/fresh-sea-tiger-prawns-deveined-&-cleaned-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-white-prawns/fresh-sea-white-prawns-deveined-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-white-prawns/fresh-sea-white-prawns-deveined-&-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-white-prawns/fresh-sea-white-prawns-deveined-cleaned-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-white-prawns/fresh-sea-white-prawns-deveined-&-cleaned-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-white-prawns/fresh-sea-white-prawns-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-black-tiger-prawns/farm-fresh-black-tiger-prawns-deveined-&-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-black-tiger-prawns/farm-fresh-black-tiger-prawns-deveined-&-clean-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-jumbo-prawns/farm-fresh-jumbo-prawns-deveined-&-clean-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-jumbo-prawns/farm-fresh-jumbo-prawns-deveined-&-clean',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-large-prawns/farm-fresh-large-prawns-deveined-&-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-large-prawns/farm-fresh-large-prawns-deveined-&-cleaned-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-medium-prawns/farm-fresh-medium-prawns-deveined-&-cleaned-tail-on',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-medium-prawns/farm-fresh-medium-prawns-deveined-&-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/farm-fresh-medium-prawns/farm-fresh-medium-prawns-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-crab/fresh-sea-crab-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sea-crab/fresh-sea-crab-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-mud-crab/fresh-mud-crab-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-mud-crab/fresh-mud-crab-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-lobsters/fresh-lobsters-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-lobsters/fresh-lobsters-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-himalayan-trout/fresh-himalayan-trout-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-himalayan-trout/fresh-himalayan-trout-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-norwegian-salmon/fresh-norwegian-salmon-fillet',
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
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-steaks-with-head-&-tail',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-steaks-with-head-tail',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-whole-pack-of-2-fish',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-silver-pomfret-large/fresh-silver-pomfret-large-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-steaks-with-head-tail',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-steaks-with-head-&-tail',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-whole-pack-of-3-fish',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-pomfret-medium/fresh-silver-pomfret-medium-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-seer-fish/fresh-seer-fish-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-seer-fish/fresh-seer-fish-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rawas/fresh-indian-salmon-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rawas/fresh-indian-salmon-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-roopchand/fresh-roopchand-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-roopchand/fresh-roopchand-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sole/fresh-sole-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-sole/fresh-sole-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-bengali-cut',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-steaks',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-rohu/fresh-rohu-steak',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-ompak-pabda/fresh-ompak-pabda-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-ompak-pabda/fresh-ompak-pabda-whole-cleaned',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-catla/fresh-catla-bengali-cut',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-catla/fresh-catla-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia/fresh-tilapia-fillet',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia/fresh-tilapia-moon-cut-pack-of-2-fish',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-tilapia/fresh-tilapia-whole',
// 'https://cambaytigerstage-nh.farziengineer.co/product/fresh-indian-basa/fresh-indian-basa-fillet'
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
