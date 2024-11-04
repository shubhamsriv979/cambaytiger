
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Booking flow', () => {

  it('Booking flow', () => {
    cy.visit('https://www.plixlife.com/')
    cy.wait(5000);
    cy.visit('https://www.plixlife.com/')
    cy.xpath("//div[@class='slick-slide slick-active']//div//p[@class='productCard__name sc-dNLxif clgulF'][normalize-space()='Weight Loss Plan']").click();
    cy.get('.desktopAddToCartPdp__mainText.sc-dfVpRl.hAsLhk')
      .should('be.visible') // Check that the button is visible
      .click(); // Click the button
    cy.contains("Weight Loss Plan").should('be.visible');    
    cy.get('.cart_closebutton').click();
    cy.get("li[class='plixlife-main-menu__searchInput'] div div[class='SearchSuggestionBar_wrapper__1Uc5K']").type("ACV");
    cy.get(':nth-child(2) > .productCardContainer > .sc-fYiAbW > .undefined__buttonContainer > [data-test="addProductToCartButton"]').click();
    cy.contains("Fit & Slim").should('be.visible');
    cy.visit('https://www.plixlife.com/checkout/address');
    cy.get(':nth-child(1) > .CheckoutV3_row__B8iYl > .CheckoutV3_inputErroDiv__Mnt0N > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("6388789049");
    cy.get('.CheckoutV3_formFieldsContainer__oslV0 > :nth-child(5) > .CheckoutV3_row__B8iYl > :nth-child(1) > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("Shubham");
    cy.get(':nth-child(5) > .CheckoutV3_row__B8iYl > :nth-child(2) > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("Srivastava");
    cy.get(':nth-child(6) > .CheckoutV3_row__B8iYl > .CheckoutV3_inputErroDiv__Mnt0N > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("samsrivastava.uptech@gmail.com");
    cy.get(':nth-child(7) > .CheckoutV3_row__B8iYl > :nth-child(1) > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("226004");
    cy.get(':nth-child(7) > .CheckoutV3_row__B8iYl > :nth-child(2) > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("Lucknow");
    cy.get('.Select_selectContainer1__select__MYDmO').select("Uttar Pradesh");    
    cy.get(':nth-child(9) > .CheckoutV3_row__B8iYl > .CheckoutV3_inputErroDiv__Mnt0N > .Input_inputContainer1___hB1t > .Input_inputContainer1__input__nFgYI').type("test test");
    cy.wait(6000);
    cy.contains("Cash On Delivery", { timeout: 5000 }).click({ force: true });
    cy.wait(6000);
    cy.contains("Cash On Delivery", { timeout: 5000 }).click({ force: true });
    cy.wait(6000);
    cy.get('.CheckoutV3_onlyLargeScreen__ckqbj > .Input_inputContainer2__HvuL0 > .Input_inputContainer2__input__bAkR6').click();

  })


})