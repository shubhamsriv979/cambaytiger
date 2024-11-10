let failedUrls = [];
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Booking flow', () => {

    it('should complete the booking flow successfully', () => {
      
      cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
  
      // Select location
      cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input')
        .type("Bangalore");  
      cy.get('.AdressCont__inside > :nth-child(1) > div').click();  
  

      
  
      


    }); 
    
  });
  