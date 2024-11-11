import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Search functionality check', () => {

  it('Search functionality check', () => {
    cy.visit('https://www.plixlife.com/');
    cy.frameLoaded("[id='wiz-iframe-intent']");
         // Step 3: Interact with elements inside the iframe
         cy.iframe("[id='wiz-iframe-intent']").within(() => {
          cy.get("#ct-content-wrapper > span",{timeout:5000}).click();
      });  
    // Search the product
    cy.get("li[class='plixlife-main-menu__searchInput'] div div[class='SearchSuggestionBar_wrapper__1Uc5K']").type("ACV");
    // Click on the product
    cy.get(':nth-child(1) > .productCardContainer > .sc-fYiAbW > .undefined__cardInfo > a > .productCard__name').click();
    // Verify the product title in PDP  
    cy.get('[data-test="productName"]').should('have.contain', 'Apple Cider Vinegar Effervescent with mother for weight loss');
  })

})