import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
  // Prevent Cypress from failing the test on uncaught exceptions
  return false;
});

beforeEach(() => {
  cy.intercept('https://example.com/api/geo', {
    body: { region: 'IN' }, // Mock the geo response as Indian
  }).as('mockGeo');
});


describe('Search functionality check', () => {

  it('Search functionality check', () => {
    cy.visit('https://www.plixlife.com/');
    


    // // Access the iframe and wait for it to load
    // cy.get("#wiz-iframe-intent").then((iframedata) => {
    //   // Access the iframe's document
    //   iframedata.contents().find('body')      
    // })
    // cy.reload();
cy.wait(20000);
    // Search the product
    cy.get("li[class='plixlife-main-menu__searchInput'] div div[class='SearchSuggestionBar_wrapper__1Uc5K']").type("ACV");
    // Click on the product
    cy.get(':nth-child(1) > .productCardContainer > .sc-fYiAbW > .undefined__cardInfo > a > .productCard__name').click();
    // Verify the product title in PDP  
    cy.get('[data-test="productName"]').should('have.contain', 'Apple Cider Vinegar Effervescent with mother for weight loss');
  })

})