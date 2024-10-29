Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test due to the uncaught exception
  return false;
});

describe('template spec', () => {

  // it('task4', () => {
  //   cy.visit('https://cambaytiger.com/')
  //   cy.wait(10000);
  //   cy.visit('https://cambaytiger.com/')
  //   cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Banglore");
  //   cy.wait(5000);
  //   cy.get('.AdressCont__inside > :nth-child(1) > div', {timeout: 10000}).click();
  //   cy.wait(5000);
  //   cy.xpath("//div[@class='showOnDesktop']//input[@placeholder='Search for seafood, chicken & more']",{timeout: 10000}).type("But");
  //   cy.wait(5000);
  //   cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > p:nth-child(1)',{timeout: 10000}).click();
  //   cy.get("div[class='showOnDesktop'] li[class='breadcrumbs__active'] a",{timeout: 10000}).should('contain', "Fresh Large Prawns");   

  // })

  // it('task5', () => {
  //   cy.visit('https://cambaytiger.com/')
  //   cy.wait(5000);
  //   cy.reload();
  //   cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Banglore",{timeout:10000});
  //   cy.wait(5000);
  //   cy.get('.AdressCont__inside > :nth-child(1) > div', {timeout: 10000}).click();
  //   cy.wait(10000);
  //   cy.get("div[class='slick-slide slick-active slick-current'] div img",{timeout:10000}).eq(0).click();
  //   cy.wait(5000);

  // cy.get('body').then((body) => {
  //   if (body.find(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input123').length > 0) {
  //     cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input123').should('be.visible').then(() => {
  //       // Element is visible, execute the following lines
  //       cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Banglore",{timeout:10000});
  //       cy.wait(5000);
  //       cy.get('.AdressCont__inside > :nth-child(1) > div', {timeout: 10000}).click();
  //     });
  //   }
  // });

  //   cy.get("div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] div[class='product-page'] main[class='sc-fOICqy jwYfLk'] div[class=' product-container '] div[class='product-page__product__info'] div[class='showOnDesktop'] div[class='product-page__product__info--fixed'] div[class='sc-yZwTr fFeYrE'] div div[class='showOnDesktop'] button[class='atc-button undefined sc-gxMtzJ dEodW sc-bdVaJa cbdbVo']",{timeout:10000}).click();
  //   cy.wait(5000);
  //   cy.contains("Cart",{timeout:10000}).eq(0).click();
  //   cy.get('[data-test="itemName"]').should("have.text","Mutton Curry Cut ");
  //   cy.wait(5000);
  //   cy.get('.overlayFarzicom__header__close-icon',{timeout:10000}).click();

  //     cy.wait(5000);
  //   cy.xpath("//div[@class='showOnDesktop']//input[@placeholder='Search for seafood, chicken & more']",{timeout: 10000}).type("But");
  //   cy.wait(5000);
  //   cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1)',{timeout: 10000}).click();
  //   cy.contains("Cart",{timeout:10000}).eq(0).click();
  //   cy.get(':nth-child(3) > [data-test="cartRow"] > .sc-fXUGxx > .title-and-trash > a > [data-test="itemName"]',{timeout: 10000}).should('contain', "Chicken Curry Cut");   
  // })

  // it('task loop', () => {
  //   const locations = ['Bangalore', 'Mumbai', 'Lucknow','delhi airport','Bandra kurla'];

  //     cy.visit('https://cambaytiger.com/');
  //     cy.wait(10000);
  //     cy.reload();
  //     cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input').type("Bangalore");
  //     cy.wait(5000);
  //     cy.get('.AdressCont__inside > :nth-child(1) > div', {timeout: 10000}).click();
  //     cy.wait(5000);



  //     locations.forEach((location) => {
  //       context(`Testing food ordering at ${location}`, () => {
  //       cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > [data-test="menuCartOverlayLink"] > .GG-main-menu__icon__LocationStateCity > p').click();
  //       cy.wait(10000);
  //       cy.get('#header > div.scss_mainNavContainerWrapper__m_O_A > div > div.scss_logoSearchContainer__ca6MR > div:nth-child(3) > div.scss_GGLocation__cfABD > div > div:nth-child(6) > div.GGLocation__input > input',{timeout:10000})
  //       .eq(0).type(location);  // targets the first element (index starts from 0)    
  //       cy.wait(5000);
  //       cy.get('.AdressCont__inside > :nth-child(1) > div', {timeout: 10000}).click();
  //       cy.wait(5000);


  //     //   cy.xpath("//div[@class='showOnDesktop']//input[@placeholder='Search for seafood, chicken & more']",{timeout: 10000}).type("But");
  //     //   cy.wait(5000);
  //       });
  //     });


  //     // cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > a:nth-child(1) > p:nth-child(1)',{timeout: 10000}).click();
  //     // cy.get("div[class='showOnDesktop'] li[class='breadcrumbs__active'] a",{timeout: 10000}).should('contain', "Fresh Large Prawns");   

  //   })

  it('task loop', () => {
    const locations = [
      'Juhu',
      'delhi airport',
      'Bandra kurla',
      'Mumbai',
      'Bangalore'  
    ];
    // const products = [
    //   'Mutton', //single product
    //   'combo'   //combo product
    // ];
    
    const product_urls = [
      // 'https://cambaytigerstage-nh.farziengineer.co/product/mutton-curry-cut',  //single product
      'https://cambaytigerstage-nh.farziengineer.co/product/chicken-prawns-combo',      //combo product
      'https://cambaytigerstage-nh.farziengineer.co/fresh-pomfret-medium',                //multi variant
      'https://cambaytigerstage-nh.farziengineer.co/Goan-Cafreal-Curry',      //not available in any location
    ];
    
    cy.visit('https://cambaytigerstage-nh.farziengineer.co/');
    cy.reload({ timeout: 100000 });

    // // select location 
    // cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input', { timeout: 100000 }).type("Bangalore", { timeout: 100000 });
    // cy.get('.AdressCont__inside > :nth-child(1) > div', { timeout: 100000 }).click();
    

    // //Login
    // cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-bryTEL fIJmHu'] span", { timeout: 100000 }).click();
    // cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div button[class='user-register']", { timeout: 100000 }).click();            
    // cy.wait(5000);
    // cy.get("input[placeholder='Enter Phone number']", { timeout: 100000 }).click({ timeout: 100000 }).type("6388789049", { delay: 100, force: true, timeout: 100000 });
    // cy.get('.scss_loginRegCont__m2Dae > button').click();
    // cy.get("#otp-0", { timeout: 100000 }).type("123456", { timeout: 100000 });
    // cy.get('.scss_loginRegCont__m2Dae > button').click();
    // cy.wait(5000);      
        

    // locations.forEach((location) => {
    //   context(`Testing food ordering at ${location}`, () => {
    //     cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > [data-test="menuCartOverlayLink"] > .GG-main-menu__icon__LocationStateCity > p', { timeout: 100000 }).click({ force: true });
    //     cy.wait(10000);        
    //     cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']", { timeout: 100000 })
    //     .click({ timeout: 100000 });          
    //     cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div[class='scss_logoSearchContainer__ca6MR'] div div[class='scss_GGLocation__cfABD'] div[class='scss_GGLocation__topCont__oRucC'] div input[placeholder='Please enter delivery location...']", { timeout: 100000 })
    //       .eq(0).type(location, { timeout: 100000 });  // targets the first element (index starts from 0)    
    //     cy.wait(10000);
    //     cy.get('.AdressCont__inside > :nth-child(1) > div', { timeout: 100000 }).click({ timeout: 100000 });
    //     cy.wait(15000);
    //     product_urls.forEach((product_urls) => {
    //       context(`Testing food ordering at ${product_urls}`, () => {
    //         cy.visit(product_urls, { timeout: 200000, failOnStatusCode: false });

    //         cy.get('body').then((body) => {
    //           const addToCartSelector = "div[class='showOnDesktop'] div[class='scss_appContainer__yvhBB'] div[class='product-page'] main[class='sc-jWNpPo gluggg'] div[class=' product-container '] div[class='product-page__product__info'] div[class='showOnDesktop'] div[class='product-page__product__info--fixed'] div[class='sc-hBbWxd ljHzFv'] div div[class='showOnDesktop'] div[class='undefined__mainText sc-gzOgki iuyAzF']";
    //           if (body.find(addToCartSelector).length > 0) {
    //             cy.get(addToCartSelector).then(($el) => {
    //               const buttonText = $el.text().trim();

    //               if (buttonText.includes("Add To Cart")) {
    //                 // "Add To Cart" button is available, proceed with clicking it
    //                 cy.wrap($el).click({ force: true });

    //                 cy.contains("Cart", { timeout: 100000 }).eq(0).click();
    //                 cy.get(':nth-child(3) > [data-test="cartRow"] > .sc-fXUGxx > .title-and-trash > a > [data-test="itemName"]', { timeout: 100000 }).should('be.visible');
    //                 cy.contains("proceed to checkout").click();
    //                 cy.get('.Address_button__text__ved_d', { timeout: 100000 }).click();
    //                 cy.get("div[class='Delivery_slotTimeCont__ZNBHh'] div:nth-child(1)", { timeout: 100000 }).click();
    //                 cy.get(".Delivery_button__text__d8uUZ", { timeout: 100000 }).click();

    //                 // Call the function
    //                 selectCOD();
    //                 function selectCOD() {
    //                   cy.get("input[value='mirumee.payments.dummy']",{ timeout: 100000 }).then(($radio) => {
    //                     if (!$radio.is(':checked')) {
    //                       cy.wrap($radio).click({ force: true });
    //                       selectCOD(); // Call the function recursively until it is selected
    //                     }
    //                   });
    //                 }
    //                 cy.wait(5000);             
    //                 // cy.get('.payment_button__text__busIX',{timeout:100000}).click({timeout:100000});
                    
    //                 submit();
    //                 function submit() {
    //                   const initialUrl = Cypress.config("baseUrl"); // Store the initial URL
                    
    //                   cy.get('.payment_button__text__busIX',{timeout:100000}).click({ force: true });
                    
    //                   // Wait and check if the URL has changed
    //                   cy.url().then((currentUrl) => {
    //                     if (currentUrl === initialUrl) {
    //                       submit(); // Recursively call the function if the URL hasn't changed
    //                     }
    //                   });
    //                 }
    //                 cy.wait(1000);          
    //                 cy.url().should('include', 'order-placed', { timeout: 100000 });      
                    
                    



    //               } else if (buttonText.includes("Notify Me")) {
    //                 // "Notify Me" button is available, log a message or perform alternate actions
    //                 cy.log("Notify Me button is available instead of Add To Cart");
    //                 // Optionally, perform other actions or stop the test gracefully
    //               }
    //             });
    //           }
    //         });


    //       });
    //     });

    //   });
    // });


  })

})