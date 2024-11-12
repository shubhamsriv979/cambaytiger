
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Search functionality', () => {


  it('Search functionality', () => {
    cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    cy.reload({ timeout: 100000 });

    // select location 
    cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Bangalore");
    cy.get('.AdressCont__inside > :nth-child(1) > div').click();
    cy.wait(5000);

    cy.xpath("//h2[normalize-space()='In the Spotlight']").click();
    
    cy.get("div[class='showOnDesktop'] input[placeholder='Search for seafood, chicken & more']").type("But");
    cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > p:nth-child(1)").click();
    cy.get("div[class='showOnDesktop'] li[class='breadcrumbs__active'] a").should('contain', "Mutton Curry Cut");

  })
})
