let failedUrls = []; // Array to track failed URLs

Cypress.on('fail', (error, runnable) => {
  // Add any custom behavior during failure, e.g., logging the error
  cy.task('log', `Test failed: ${runnable.title}`);
  throw error; // Re-throw the error to fail the test
});

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('Booking flow', () => {

  it('Booking flow', () => {
    const locations = [      
      'delhi airport',      
      'Mumbai',
      'Bangalore'
    ];
    

    const product_urls = [
      // 'https://cambaytigerstage-nh.farziengineer.co/product/mutton-curry-cut',
      // 'https://cambaytigerstage-nh.farziengineer.co/product/chicken-prawns-combo',      //combo product        
      // 'https://cambaytigerstage-nh.farziengineer.co/product/mutton-boneless-chunks',  //single product
      'https://cambaytigerstage-nh.farziengineer.co/product/classic-white-eggs',
      'https://cambaytigerstage-nh.farziengineer.co/product/brown-eggs'

    ];

    cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    // cy.wait(20000);
    // cy.reload();

    // select location 
    cy.wait(10000);
    cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Bangalore", { delay: 100, force: true });
    cy.wait(10000);
    cy.get('.AdressCont__inside > :nth-child(1) > div').click();
    cy.wait(10000);

    // stage Login
    cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-kZUnxY dAzJsv'] span").click();
    cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div button[class='user-register']").click();
    // prod login
    // cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-bryTEL fIJmHu'] span",).click();
    // cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div button[class='user-register']").click();

    cy.wait(5000);
    cy.get("input[placeholder='Enter Phone number']").click().type("6388789049", { delay: 100, force: true });
    cy.get('.scss_loginRegCont__m2Dae > button').click();
    cy.get("#otp-0").type("123456",);
    cy.get('.scss_loginRegCont__m2Dae > button').click();
    cy.wait(5000);


    locations.forEach((location) => {
      context(`Testing food ordering at ${location}`, () => {      
        selectLocationUntilNotMumbai();
        function selectLocationUntilNotMumbai() {
          // Click on the location field to open the location selector
          cy.wait(5000);
          cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > [data-test="menuCartOverlayLink"] > .GG-main-menu__icon__LocationStateCity > p')
            .click();

          // Set location to "Other Location"
          cy.wait(1000);
          cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']")
            // .should('have.class', 'active')
            .click()
            .type(location, { delay: 100, force: true })
            .then(() => {

              // Assert to check if the selected location is not "Mumbai"
              cy.wait(15000);
              cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']").then(($elelocation) => {
                if ($elelocation.val().includes(location)) {
                  // If location is still "Mumbai," re-run the function to select again
                  cy.wait(1000);
                  cy.get('.AdressCont__inside > :nth-child(1) > div').click();
                  cy.wait(15000);
                } else {
                  // Location is not "Mumbai," test can proceed                    
                  cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div p[class='GGLocation__hide']").click();
                  cy.log($elelocation)
                  selectLocationUntilNotMumbai();
                }
              });
            });
        }
        
        product_urls.forEach((product_urls) => {
          context(`Testing food ordering at ${product_urls}`, () => {
            cy.visit(product_urls, { timeout: 500000, failOnStatusCode: false });            
            cy.wait(5000);
            cy.get('body').then((body) => {
              // you-may-also-like heading in valid pdp
              const locator_heading = "div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] li:nth-child(1) a:nth-child(1)";              
              // Check if the 404 error or continue button is present
              if (body.find(locator_heading).length === 0) {
                // Log error message
                cy.log("404 Page Not Found error detected.");
                failedUrls.push(product_urls);  // Add failed URL to the array

              }
            });

            cy.get('body').then((body) => {
              //stage
              const addToCartSelector = "div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] div[class='product-page'] main[class='sc-jWNpPo gluggg'] div[class=' product-container '] div[class='product-page__product__info'] div[class='showOnDesktop'] div[class='product-page__product__info--fixed'] div[class='sc-hBbWxd ljHzFv'] div div[class='showOnDesktop'] div[class='undefined__mainText sc-gzOgki fSlvAH']";
              //prod
              // const addToCartSelector = "div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] div[class='product-page'] main[class='sc-jWNpPo gluggg'] div[class=' product-container '] div[class='product-page__product__info'] div[class='showOnDesktop'] div[class='product-page__product__info--fixed'] div[class='sc-hBbWxd ljHzFv'] div div[class='showOnDesktop'] div[class='undefined__mainText sc-gzOgki iuyAzF']";
              cy.wait(10000);
              if (body.find(addToCartSelector).length > 0) {
                cy.get(addToCartSelector).then(($el) => {
                  const buttonText = $el.text().trim();

                  if (buttonText.includes("Add To Cart")) {
                    // "Add To Cart" button is available, proceed with clicking it
                    cy.wrap($el).click({ force: true });
                    cy.contains("Cart").eq(0).click();
                    //cart heading text
                    cy.get(".overlayFarzicom__header__text").should('be.visible');
                    cy.wait(10000);

                    cy.get('body').then(($body) => {
                      //proceed to checkout button
                      if ($body.find("button[class='cart-gg__footer__button__place__order'] span").length > 0) {
                        //product heading
                        cy.get(".sc-htnqrb.dVayQT").should("be.visible");
                        cy.contains("proceed to checkout").click();
                        cy.get('.Address_button__text__ved_d').click();
                        cy.get("div[class='Delivery_slotTimeCont__ZNBHh'] div:nth-child(1)").click();
                        cy.get(".Delivery_button__text__d8uUZ").click();
                        // Call the function
                        selectCOD();
                        function selectCOD() {
                          cy.get("input[value='mirumee.payments.dummy']").then(($radio) => {
                            if (!$radio.is(':checked')) {
                              cy.wait(1000);
                              cy.wrap($radio).click({ force: true });
                              selectCOD(); // Call the function recursively until it is selected
                            }
                          });
                        }
                        cy.wait(15000);
                        cy.get('.payment_button__text__busIX')
                          .should("be.visible")
                          .click({ force: true });       
                        cy.wait(15000);                                   
                        

                      } else {
                        cy.log('product is out of stock');
                        cy.get("button[class='overlayFarzicom__header__close-icon'] svg").click();
                      }
                    });


                  } else if (buttonText.includes("Notify Me")) {
                    // "Notify Me" button is available, log a message or perform alternate actions
                    cy.log("Notify Me button is available instead of Add To Cart");
                    // Optionally, perform other actions or stop the test gracefully
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
          // Log failed URLs regardless of the test outcome
          cy.task('log', "The following URLs failed:");
          failedUrls.forEach(url => cy.task('log', url));
          // throw new Error("One or more URLs failed."); // Explicitly fail the test suite
          cy.get("Some Urls contains 404 page",{timeout:1000});
        } else {
          cy.task('log', "All URLs passed successfully."); // Always log success
        }
      });
      

})
