import Membership from '../../../support/PageObjects/Membership';
import Home from '../../../support/PageObjects/Home';

import 'cypress-iframe'
Cypress.on('uncaught:exception', (err, runnable) => {
  if (err.message.includes('Response not successful: Received status code 400')) {
    return false; // Ignore this specific error
  }
  return false;
});


describe('Membership functionality', () => {

  const location1 = [
    'Mumbai',
    'delhi airport',
    'Bangalore'
  ];

  // it('Bronze Membership functionality', () => {
  //   cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    
  //   // Select location 
  //   Home.selectPrimaryLocation();

  //   //  Login
  //   Home.login();
    
  //   // select location & open cambay club page
  //   Membership.openMembershipPage();

    
  //   //Clear Cart
  //   Home.cartClear();

  //   //Select Bronze
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(3) span:nth-child(2)").click();
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();    

    
  //   //Checkout
  //   Membership.checkout();

  //   //Razorpay
  //   Membership.razorpay();

  //   //Order History
  //   Membership.orderHistory();

  //   //Admin membership fulfil
  //   Membership.adminFulfil();

  //   //Visit membership page
  //   cy.visit('https://cambaytigerstage-nh.farziengineer.co/page/membership');

  //   //Verify the membership
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_planType__ZeJCO']").should("have.text", "Bronze");
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_duration__Wz9aN']").should("have.text", "Plan Duration : 1 month ");

  //   //Order Place
  //   Membership.orderPlace();

  //   //Verify deliverycharges
  //   Membership.verifyDeliveryCharges();
    
  //   // Product checkout
  //   Membership.productcheckout();

  //   // Remove membership from admin
  //   Membership.removeMembership();
  // })

  // it('Gold Membership functionality', () => {
  //   cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    
  //   // Select location 
  //   Home.selectPrimaryLocation();

  //   //  Login
  //   Home.login();
    
  //   // select location & open cambay club page
  //   Membership.openMembershipPage();

    
  //   //Clear Cart
  //   Home.cartClear();

  //   //Select Gold
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(5) span:nth-child(2)").click();
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_desktopAddToCartMembership__I2B_T__mainText sc-gzOgki fSlvAH']").click();    
    
  //   //Checkout
  //   Membership.checkout();

  //   //Razorpay
  //   Membership.razorpay();

  //   //Order History
  //   Membership.orderHistory();

  //   //Admin membership fulfil
  //   Membership.adminFulfil();

  //   //Visit membership page
  //   cy.visit('https://cambaytigerstage-nh.farziengineer.co/page/membership');

  //   //Verify the membership
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_planType__ZeJCO']").should("have.text", "Gold");
  //   cy.get("div[class='showOnDesktop'] div[class='Membership_duration__Wz9aN']").should("have.text", "Plan Duration : 6 month ");

  //   //Order Place
  //   Membership.orderPlace();

  //   //Verify deliverycharges
  //   Membership.verifyDeliveryCharges();
    
  //   // Product checkout
  //   Membership.productcheckout();

  //   // Remove membership from admin
  //   Membership.removeMembership();
  // })

  it('Silver Membership functionality', () => {
    cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    
    // Select location 
    Home.selectPrimaryLocation();

    //  Login
    // Home.login();
    
    // select location & open cambay club page
    Membership.openMembershipPage();

    
    // //Clear Cart
    // Home.cartClear();

    const cartQuantitySelector = ".GG-main-menu__cart__quantity__gg";

let stopIteration = false; // Flag to control iteration

for (const location of location1) {
    if (stopIteration) break; // Stop iteration if the flag is set

    context(`Testing food ordering at ${location}`, () => {
        it(`Tests for location: ${location}`, () => {
            // Select Silver
            cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();

            // Check cart quantity
            cy.get(cartQuantitySelector)
                .invoke('text')
                .then((text) => {
                    const cartQuantity = parseInt(text.trim());
                    if (cartQuantity !== 0) {
                        stopIteration = true; // Set the flag to stop iteration
                    }
                });
        });
    });
}
    
    // //Checkout
    // Membership.checkout();

    // //Razorpay
    // Membership.razorpay();

    // //Order History
    // Membership.orderHistory();

    // //Admin membership fulfil
    // Membership.adminFulfil();

    // //Visit membership page
    // cy.visit('https://cambaytigerstage-nh.farziengineer.co/page/membership');

    // //Verify the membership
    // cy.get("div[class='showOnDesktop'] div[class='Membership_planType__ZeJCO']").should("have.text", "Silver");
    // cy.get("div[class='showOnDesktop'] div[class='Membership_duration__Wz9aN']").should("have.text", "Plan Duration : 3 month ");

    // //Order Place
    // Membership.orderPlace();

    // //Verify deliverycharges
    // Membership.verifyDeliveryCharges();
    
    // // Product checkout
    // Membership.productcheckout();

    // // Remove membership from admin
    // Membership.removeMembership();
  })
})