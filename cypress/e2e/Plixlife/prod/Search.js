import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Search functionality check', () => {

  it('Search functionality check', () => {
    cy.visit('https://www.plixlife.com/');

    
    function clickUntilVisible() {
      cy.contains("Continue").then(($button) => {
          if ($button.length && $button.is(':visible')) {
              // If the button exists and is visible, click it.
              cy.wrap($button).click({ force: true });
          } else {
              // Retry after a delay.
              cy.wait(500); // Adjust the delay.
              clickUntilVisible();
          }
      });
  }
  
  // Call the function
  clickUntilVisible();
  
    // cy.reload();

    // Access the iframe and wait for it to load
    cy.get("#wiz-iframe-intent").then((iframedata) => {
      // Access the iframe's document
      iframedata.contents().find('body')      
    })
    cy.reload();

    // Search the product
    cy.get("li[class='plixlife-main-menu__searchInput'] div div[class='SearchSuggestionBar_wrapper__1Uc5K']").type("ACV");
    // Click on the product
    cy.get(':nth-child(1) > .productCardContainer > .sc-fYiAbW > .undefined__cardInfo > a > .productCard__name').click();
    // Verify the product title in PDP  
    cy.get('[data-test="productName"]').should('have.contain', 'Apple Cider Vinegar Effervescent with mother for weight loss');
  })

})