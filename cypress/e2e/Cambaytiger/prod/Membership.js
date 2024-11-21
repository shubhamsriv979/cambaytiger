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
    cy.visit('https://farzistore-nh.farziengineer.co/');
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
    cy.contains("Cart").eq(0).click();
    cy.get("path[d='M13.5 2.93423H10.9062L9.84375 1.19165C9.59375 0.787118 9.03125 0.444824 8.5625 0.444824H5.40625C4.9375 0.444824 4.375 0.787118 4.125 1.19165L3.0625 2.93423H0.5C0.21875 2.93423 0 3.18317 0 3.43211V3.92999C0 4.21005 0.21875 4.42788 0.5 4.42788H1L1.65625 14.9767C1.6875 15.7547 2.375 16.377 3.15625 16.377H10.8125C11.5938 16.377 12.2812 15.7547 12.3125 14.9767L13 4.42788H13.5C13.75 4.42788 14 4.21005 14 3.92999V3.43211C14 3.18317 13.75 2.93423 13.5 2.93423ZM5.40625 1.93847H8.5625L9.15625 2.93423H4.8125L5.40625 1.93847ZM10.8125 14.8834H3.15625L2.5 4.42788H11.4688L10.8125 14.8834Z']").click();
  })

  // it('Silver Membership functionality', () => {
  //   cy.visit('https://farzistore-nh.farziengineer.co/');
  //   cy.wait(20000);
  //   cy.reload();

  //   // select location & open cambay club page
  //   Membership.prodSearchLocations();

  //   //Select Silver
  //   // cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(3) span:nth-child(2)").click();
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();
  //   cy.get(".scss_cart__LPPJw").click();

  //   //Login
  //   Membership.login();

  //   //Checkout
  //   Membership.checkout();
    
  //   //Razorpay
  //   Membership.razorpay();    
  // })

  // it('Gold Membership functionality', () => {
  //   cy.visit('https://farzistore-nh.farziengineer.co/');
  //   cy.wait(20000);
  //   cy.reload();

  //   // select location & open cambay club page
  //   Membership.prodSearchLocations();

  //   //Select Gold
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(5) span:nth-child(2)").click();
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();    
  //   cy.get(".scss_cart__LPPJw").click();

  //   //Login
  //   Membership.login();

  //   //Checkout
  //   Membership.checkout();
    
  //   //Razorpay
  //   Membership.razorpay();    
  // })
})