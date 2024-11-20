import Membership from '../../../support/PageObjects/Membership';

import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Response not successful: Received status code 400')) {
    return false; // Ignore this specific error
  }
  return false;
});


describe('Membership functionality', () => {

  it('Bronze Membership functionality', () => {
    cy.visit('https://cambaytiger.com/');
    Membership.closeAdvPopup();

    // select location & open cambay club page
    Membership.prodSearchLocations();

    //Select Bronze
    cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(3) span:nth-child(2)").click();
    cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();
    cy.get(".scss_cart__LPPJw").click();

    //Login
    Membership.login();

    //Checkout
    Membership.checkout();
    
    //Razorpay
    Membership.razorpay();    
  })

  it('Silver Membership functionality', () => {
    cy.visit('https://cambaytiger.com/');
    cy.wait(20000);
    cy.reload();

    // select location & open cambay club page
    Membership.prodSearchLocations();

    //Select Silver
    // cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(3) span:nth-child(2)").click();
    cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();
    cy.get(".scss_cart__LPPJw").click();

    //Login
    Membership.login();

    //Checkout
    Membership.checkout();
    
    //Razorpay
    Membership.razorpay();    
  })

  it('Gold Membership functionality', () => {
    cy.visit('https://cambaytiger.com/');
    cy.wait(20000);
    cy.reload();

    // select location & open cambay club page
    Membership.prodSearchLocations();

    //Select Gold
    cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(5) span:nth-child(2)").click();
    cy.get("div[class='showOnDesktop'] div[class='Membership_desktopAddToCartMembership__I2B_T__mainText sc-gzOgki fSlvAH']").click();    
    cy.get(".scss_cart__LPPJw").click();

    //Login
    Membership.login();

    //Checkout
    Membership.checkout();
    
    //Razorpay
    Membership.razorpay();    
  })
})