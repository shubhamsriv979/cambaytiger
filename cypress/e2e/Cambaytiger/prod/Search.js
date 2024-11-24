import Membership from '../../../support/PageObjects/Membership';

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Search functionality', () => {


  it('Search functionality', () => {
    cy.visit('https://cambaytiger.com/');
    // Access the iframe and wait for it to load (e.g., advertisement pop-up)
    Membership.closeAdvPopup();

    // select location 
    cy.wait(10000);
    cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input')
      .click()
      .type("Bangalore", { delay: 100, force: true });
    cy.wait(10000);
    cy.get('.AdressCont__inside > :nth-child(1) > div').click();
    cy.wait(10000);

    // cy.get("div[class='showOnDesktop'] input[placeholder='Search for seafood, chicken & more']").should('be.visible').type("But");
    // cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > p:nth-child(1)").click();
    // cy.get("div[class='showOnDesktop'] li[class='breadcrumbs__active'] a").should("be.visible");


    //  Login
    cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > :nth-child(3) > .GG-main-menu__lower__desktop-right__ul > .GG_dropDown_button > span').click();
    cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div button[class='user-register']").click();


    cy.wait(5000);
    cy.get("input[placeholder='Enter Phone number']").click().type("6388789049", { delay: 100, force: true });
    cy.get('.scss_loginRegCont__m2Dae > button').click();
    cy.get("#otp-0").type("123456",);
    cy.get('.scss_loginRegCont__m2Dae > button').click();
    cy.wait(5000);
    cy.get(".our-categories__heading").should('be.visible');


    cy.get('body').then(($body) => {
      const cartQuantitySelector = ".GG-main-menu__cart__quantity__gg";
      const cartHeaderSelector = ".overlayFarzicom__header__text";
      const deleteButtonSelector = ".sc-fsGQkc.bgexUZ";
    
      if (
        $body.find(cartQuantitySelector).is(':visible') &&
        $body.find(cartQuantitySelector).text().trim() !== '0'
      ) {
        cy.log('Cart is not empty, proceeding to delete items.');
    
        // Click on the Cart button
        cy.contains("Cart").eq(0).click();
    
        // Validate Cart heading
        cy.get(cartHeaderSelector).should('exist').and('be.visible');
    
        // Perform the delete action
        cy.get(deleteButtonSelector).should('exist').click({ multiple: true });
        cy.get(".overlayFarzicom__header__close-icon").click();
        cy.log('All items were deleted successfully.');
      } else {
        cy.log('Cart is empty, no action performed.');
      }
    });
    



    // function clickUntilVisible() {
    //   // Use recursion safely
    //   cy.get('body').then(($body) => {
    //     // Check if the target element is visible        
    //     if ($body.find("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div span[class='GG-main-menu__cart__quantity__gg']").is(':visible')) {
    //       cy.log('Cart is empty');          
    //     }
    //     else if ($body.find(".sc-fsGQkc.bgexUZ").is(':visible')) {   
    //       cy.contains("Cart").eq(0).click();
    //       //cart heading text
    //       cy.get(".overlayFarzicom__header__text").should('be.visible');      

    //       // Perform the click action
    //       cy.get(".sc-fsGQkc.bgexUZ").click({ multiple: true });
    //       cy.log('Item is deleted');         
    //       // Call the function again to check the condition
    //       cy.wait(5000); // Add a small delay to prevent rapid execution
    //       clickUntilVisible();
    //     }
    //     else {
    //       cy.log('Both conditions failed');
    //       clickUntilVisible();
    //     }
    //   });
    // }

    // // Invoke the function
    // clickUntilVisible();

    


  })
})