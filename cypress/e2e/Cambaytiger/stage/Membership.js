import 'cypress-iframe'


  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('Response not successful: Received status code 400')) {
        return false; // Ignore this specific error
    }
    return false;
});

  
  describe('Membership functionality', () => {
  
  
    it('Membership functionality', () => {
      cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
      // cy.reload({ timeout: 100000 });
  
      // select location 
      cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Banglore");
      cy.get('.AdressCont__inside > :nth-child(1) > div').click();
      cy.wait(5000);
      
      cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-kZUnxY dAzJsv'] span").click();
      cy.get("body > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)").click();

      //Select Bronze
      cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] div:nth-child(3) span:nth-child(2)").click();
      cy.get("div[class='showOnDesktop'] div[class='Membership_parentMemberContainer__Hbxf8'] span[class='sc-htpNat hamzJc']").click();
      cy.get(".scss_cart__LPPJw").click();
      
      //Login
      cy.get("button[class='cart-gg__footer__button__place__order showOnDesktop'] span").click();
      cy.wait(3000);
      cy.get('.login_ConsultInput__3FfsY', { timeout: 100000 }).click({ timeout: 100000 }).type("6388789049", { delay: 100, force: true, timeout: 100000 });
      cy.get("button[type='submit']").click();
      cy.wait(3000);
      cy.xpath("//div[@class='overlayFarzicom overlayFarzicom--checkout']//input[1]").type("123456");
      cy.get("button[type='submit']").click();
      
      //Checkout
      cy.get("button[class='cart-gg__footer__button__place__order'] span").click();
      cy.get(".Address_button__text__ved_d").click();
      cy.get("div[class='Delivery_slotTimeCont__ZNBHh'] div:nth-child(1)").click();
      cy.get(".Delivery_button__text__d8uUZ").click();   
      cy.wait(5000);   
      cy.xpath("//div[@class='payment_button__text__busIX']").click();
      cy.wait(15000);   
      
      //Razorpay
      cy.frameLoaded("[class='razorpay-checkout-frame']");
         // Step 3: Interact with elements inside the iframe
         cy.iframe("[class='razorpay-checkout-frame']").within(() => {
          cy.get("div[data-value='card'] span[class='mr-1 truncate font-medium']").click();
          // Fill in card details (if in test mode, real data won't be required)
          cy.get("input[placeholder='Card Number']").type('5267318187975449');
          cy.get("input[placeholder='MM / YY']").type('12/25');
          cy.get("input[placeholder='CVV']").type('123');          
          cy.get("input[placeholder='Enter name on card']").type("Test");
          cy.get("button[name='button']").click();
          cy.get("button[name='pay_without_saving_card']").click();          
      });      
      cy.contains("Success").click();
      // cy.get("body > form > button.success").click();
      // cy.frameLoaded("_hjSafeContext_23818745").should('be.visible').eq(0);
      // cy.iframe().contains("Price");

      // cy.get("div[data-value='card'] span[class='mr-1 truncate font-medium']").click();
      // cy.get("input[placeholder='Card Number']").type("5267318187975449");
      // cy.get("input[placeholder='MM / YY']").type("1129");
      // cy.get("input[placeholder='CVV']").type("123");
      // cy.get("input[placeholder='Enter name on card']").type("Test");
      // cy.get("button[name='button']").click();
      // cy.get("button[name='pay_without_saving_card']").click();
      // cy.get("body > form > button.success").click();
      
  
    })
  })