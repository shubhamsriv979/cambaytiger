
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test due to the uncaught exception
    return false;
  });
  
  describe('Search functionality check', () => {

    it('Search functionality check', () => {
      cy.visit('https://plixlifefcstage-nh.farziengineer.co/')
      cy.wait(5000);
      cy.visit('https://plixlifefcstage-nh.farziengineer.co/')
      cy.get("li[class='plixlife-main-menu__searchInput'] div div[class='SearchSuggestionBar_wrapper__1Uc5K']").type("ACV");      
      cy.get(':nth-child(1) > .productCardContainer > .sc-fYiAbW > .undefined__cardInfo > a > .productCard__name').click();      
      cy.get(".addToCartSectionPlixlife__productName.sc-iKpIOp.YLfm").should('have.contain','Apple Cider Vinegar Effervescent with mother for weight loss');                
      
      
    })

})