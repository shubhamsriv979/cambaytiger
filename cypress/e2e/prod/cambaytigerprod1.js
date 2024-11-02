
Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test due to the uncaught exception
    return false;
  });
  
  describe('template spec', () => {


    it('test task', () => {
      cy.visit('https://cambaytiger.com/')     
  
    })
})