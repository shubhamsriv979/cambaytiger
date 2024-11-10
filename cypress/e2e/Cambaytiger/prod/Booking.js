let failedUrls = [];

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test due to the uncaught exception
    return false;
  });
  
  describe('template spec', () => {


    it('task loop', () => {
        const locations = [
          'Juhu'
          // 'delhi airport',
          // 'Bandra kurla',
          // 'Mumbai',
          // 'Bangalore'  
        ];
        // const products = [
        //   'Mutton', //single product
        //   'combo'   //combo product
        // ];
        
        const product_urls = [
          // 'https://cambaytiger.com/product/mutton-curry-cut',  //single product
          'https://cambaytiger.com/chicken-prawns-combo',      //combo product
          'https://cambaytiger.com/fresh-pomfret-medium',                //multi variant
          'https://cambaytiger.com/Goan-Cafreal-Curry',      //not available in any location
        ];
        
        cy.visit('https://cambaytiger.com/');
        // cy.reload({ timeout: 100000 });

    // select location 
    cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']").type("Bangalore");
    cy.get('.AdressCont__inside > :nth-child(1) > div').click();


    //Login
    // cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-bryTEL fIJmHu'] span", { timeout: 100000 }).click();
    // cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div button[class='user-register']", { timeout: 100000 }).click();
    // cy.wait(5000);
    // cy.get("input[placeholder='Enter Phone number']", { timeout: 100000 }).click({ timeout: 100000 }).type("6388789049", { delay: 100, force: true, timeout: 100000 });
    // cy.get('.scss_loginRegCont__m2Dae > button').click();
    // cy.get("#otp-0", { timeout: 100000 }).type("123456", { timeout: 100000 });
    // cy.get('.scss_loginRegCont__m2Dae > button').click();
    // cy.wait(5000);


    locations.forEach((location) => {
      context(`Testing food ordering at ${location}`, () => {
        cy.wait(5000);
        cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > [data-test="menuCartOverlayLink"] > .GG-main-menu__icon__LocationStateCity > p', { timeout: 100000 }).click({ force: true });
        cy.wait(10000);
        cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']", { timeout: 100000 })
          .click({ timeout: 100000 });
        cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']", { timeout: 100000 })
          .eq(0).type(location, { timeout: 100000 });  // targets the first element (index starts from 0)    
        cy.wait(10000);
        cy.get('.AdressCont__inside > :nth-child(1) > div', { timeout: 100000 }).click({ timeout: 100000 });
        cy.wait(15000);
        product_urls.forEach((product_url) => {
          context(`Testing food ordering at ${product_url}`, () => {
            cy.visit(product_url, { timeout: 200000, failOnStatusCode: false });
            cy.get('body').then((body) => {
              const continuebtn = "div[class='collection__desc_info__desc'] h3";
              
              // Check if the 404 error or continue button is present
              if (body.find(continuebtn).length > 0) {
                cy.get(continuebtn).then(($el) => {                 
                  // Log error message
                  cy.log("404 Page Not Found error detected.");
                  failedUrls.push(product_url);  // Add failed URL to the array
                });
              }
            });
            cy.get('body').then((body) => {
              const addToCartSelector = "div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] div[class='product-page'] main[class='sc-jWNpPo gluggg'] div[class=' product-container '] div[class='product-page__product__info'] div[class='showOnDesktop'] div[class='product-page__product__info--fixed'] div[class='sc-hBbWxd ljHzFv'] div div[class='showOnDesktop'] div[class='undefined__mainText sc-gzOgki iuyAzF']";
              
              if (body.find(addToCartSelector).length > 0) {
                cy.get(addToCartSelector).then(($el) => {
                  const buttonText = $el.text().trim();
        
                  if (buttonText.includes("Add To Cart")) {
                    // "Add To Cart" button is available, proceed with clicking it
                    cy.wrap($el).click({ force: true });
                    cy.contains("Cart", { timeout: 100000 }).eq(0).click();
                    cy.get(':nth-child(3) > [data-test="cartRow"] > .sc-fXUGxx > .title-and-trash > a > [data-test="itemName"]', { timeout: 100000 }).should('be.visible');
                    cy.contains("proceed to checkout").click();
                    cy.get('.Address_button__text__ved_d', { timeout: 100000 }).click();
                    cy.get("div[class='Delivery_slotTimeCont__ZNBHh'] div:nth-child(1)", { timeout: 100000 }).click();
                    cy.get(".Delivery_button__text__d8uUZ", { timeout: 100000 }).click();
        
                    // Call the function to select COD
                    selectCOD();
                    function selectCOD() {
                      cy.get("input[value='mirumee.payments.dummy']", { timeout: 100000 }).then(($radio) => {
                        if (!$radio.is(':checked')) {
                          cy.wrap($radio).click({ force: true });
                          selectCOD(); // Call the function recursively until it is selected
                        }
                      });
                    }
        
                    cy.wait(5000);
        
                    // Function to submit payment and check URL change
                    submit();
                    function submit() {
                      const initialUrl = Cypress.config("baseUrl");
        
                      cy.get('.payment_button__text__busIX', { timeout: 100000 }).click({ force: true });
                      cy.url().then((currentUrl) => {
                        if (currentUrl === initialUrl) {
                          submit(); // Recursively call the function if the URL hasn't changed
                        }
                      });
                    }
        
                    cy.url().should('include', 'order-placed', { timeout: 100000 });
        
                  } else if (buttonText.includes("Notify Me")) {
                    cy.log("Notify Me button is available instead of Add To Cart");                                        
                  } 
                  
                });
              }
            });
          });
        });
        

      });
    });
  })
  // Log all failed URLs after the test suite is complete
  after(() => {
    if (failedUrls.length > 0) {
      cy.log("The following URLs failed:");
      failedUrls.forEach(url => cy.log(url));
    } else {
      cy.log("All URLs passed successfully.");
    }
  });     
})