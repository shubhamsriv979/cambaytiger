// import Membership from '../../../support/PageObjects/Membership';

// import 'cypress-iframe'
// Cypress.on('uncaught:exception', (err, runnable) => {
//   if (err.message.includes('Response not successful: Received status code 400')) {
//     return false; // Ignore this specific error
//   }
//   return false;
// });


// describe('Membership functionality', () => {

//   it('Membership functionality', () => {
//     cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
//     // cy.wait(20000);
//     // cy.reload();

//     // select location & open cambay club page
//     Membership.searchForLocation();

//     //Select Silver
//     // cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(3) span:nth-child(2)").click();
//     cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();
//     cy.get(".scss_cart__LPPJw").click();

//     //Login
//     Membership.login();

//     //Checkout
//     Membership.checkout();

//     //Razorpay
//     Membership.razorpay();

//     //Order History
//     Membership.orderHistory();

//     //Admin membership fulfil
//     Membership.adminFulfil();

//     //Visit membership page
//     cy.visit('https://cambaytigerstage-nh.farziengineer.co/page/membership');

//     //Verify the membership
//     cy.get("div[class='showOnDesktop'] div[class='Membership_planType__ZeJCO']").should("have.text", "Silver");
//     cy.get("div[class='showOnDesktop'] div[class='Membership_duration__Wz9aN']").should("have.text", "Plan Duration : 3 month ");

//     //Order Place
//     Membership.orderPlace();

//     //Verify deliverycharges
//     Membership.verifyDeliveryCharges();
    
//     // Product checkout
//     Membership.productcheckout();

//     // Remove membership from admin
//     Membership.removeMembership();
//   })
// })