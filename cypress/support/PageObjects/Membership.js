class Membership {
    // stage
    searchForLocation() {
        cy.wait(10000);
        cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input')
            .type('kurla', { delay: 100, force: true });
        cy.wait(5000);
        cy.get('.AdressCont__inside > :nth-child(1) > div').click();
        cy.wait(5000); // Wait for the next steps to load
        cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-kZUnxY dAzJsv'] span").click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)").click();
    }

    // prod 
    prodSearchLocations() {
        cy.wait(10000);
        cy.get(':nth-child(1) > #header > .scss_mainNavContainerWrapper__m_O_A > .scss_mainNavContainer__UDVhL > .scss_logoSearchContainer__ca6MR > :nth-child(3) > .scss_GGLocation__cfABD > .scss_GGLocation__topCont__oRucC > :nth-child(5) > .GGLocation__input > input')
            .type('Mumbai', { delay: 100, force: true });
        cy.wait(5000);
        cy.get('.AdressCont__inside > :nth-child(1) > div').click();
        cy.wait(5000); // Wait for the next steps to load
        cy.get("div[class='showOnDesktop'] nav[id='header'] div[class='scss_mainNavContainerWrapper__m_O_A'] div[class='scss_mainNavContainer__UDVhL'] div div[class='GG_dropDown_button sc-bryTEL fIJmHu'] span",).click();
        cy.get("body > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > div:nth-child(2) > div:nth-child(2) > a:nth-child(2) > div:nth-child(1) > div:nth-child(2)").click();
        cy.get('#__next > div > div.showOnDesktop > div > div.Membership_parentMemberContainer__Hbxf8 > div.Membership_memberPlanContainer__A_mY2 > div.Membership_activeMemberColumn__4tiu4 > button').click();
    }

    closeAdvPopup() {
        // cy.get("#wzrkImageOnlyDiv").then((iframedata) => {
        //     // Access the contents of the iframe's body
        //     iframedata.contents().find('body');
        // });
        // function waitForElementAndClosePopup() {
        //     cy.get('body').then((body) => {
        //         if (body.find("#wzrkImageOnlyDiv").length > 0) {
        //             // Element exists; access the iframe
        //             cy.reload();
        //             waitForElementAndClosePopup(); // Recursive call
        //         }
        //     });
        // }

        // // Call the function in your test
        // waitForElementAndClosePopup();
    }

    login() {
        cy.get("button[class='cart-gg__footer__button__place__order showOnDesktop'] span").click();
        cy.wait(3000);
        cy.get('.login_ConsultInput__3FfsY', { timeout: 100000 }).click({ timeout: 100000 }).type("6388789049", { delay: 100, force: true, timeout: 100000 });
        cy.get("button[type='submit']").click();
        cy.wait(3000);
        cy.get('.login_Column__kjBEO > :nth-child(1)').type("123456",);
        cy.get("button[type='submit']").click();
    }

    checkout() {
        // Proceed to checkout
        cy.get("button[class='cart-gg__footer__button__place__order'] span").click();
        cy.get(".Address_button__text__ved_d").click();
        cy.wait(10000);
        cy.get("div[class='Delivery_slotTimeCont__ZNBHh'] div:nth-child(1)").click();
        cy.get(".Delivery_button__text__d8uUZ").click();
        cy.wait(15000);
        cy.get('.payment_button__text__busIX')
            .should("be.visible")
            .click({ force: true });

    }

    razorpay() {
        // Wait for the iframe to load
        cy.get("[class='razorpay-checkout-frame']").then($iframe => {
            const iframeBody = $iframe[0].contentDocument.body;

            // Ensure the iframe's body is loaded
            cy.wrap(iframeBody).should('not.be.empty');

            // Now, wrap the iframe's body to interact with elements inside
            cy.wrap(iframeBody).within(() => {
                // Click on the specific element inside the iframe
                cy.get("#nav-sidebar > div:nth-child(1) > label:nth-child(2) > div > div > div > span.flex.items-center > span").click();

                // Fill in the card details
                cy.get('input[placeholder="example@okhdfcbank"]').type('success@razorpay');


                // Click the button to proceed
                cy.contains("Verify and Pay") .click();

                // Add a wait to allow actions to complete (adjust as needed)
                cy.wait(15000);
            });
        });

    }

    orderHistory() {
        cy.visit('https://cambaytigerstage-nh.farziengineer.co/order-history');
        cy.reload();
        cy.wait(5000);
        cy.get("body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > section:nth-child(2) > article:nth-child(3) > div:nth-child(2)");
        cy.get(
            "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(1) > section:nth-child(2) > article:nth-child(3) > div:nth-child(2)"
        )
            .should("be.visible")
            .invoke('text') // Extract the text content
            .as('extractedText'); // Store as an alias  

    }

    adminFulfil() {
        cy.visit("https://cambaytigerstageadmin.farziengineer.co/");
        cy.get("input[name='email']").type("shubham.s@brimo.in");
        cy.get("input[name='password']").type("Dots@979");
        cy.get(".MuiButton-label").click();
        cy.get("div[aria-label='orders']").click();
        cy.reload();
        cy.wait(5000);
        cy.get('@extractedText').then((text) => {
            const extractedText = text.trim(); // Trim to remove extra whitespace
            const modifiedText = extractedText.slice(3); // Remove the first 3 characters
            cy.log('Modified Text:', modifiedText); // Log the modified text for debugging
            cy.get("input[placeholder='Search Orders...']").type(modifiedText);

        });
        cy.contains("test").eq(0).click();
        cy.get(':nth-child(1) > .MuiCardActions-root > .MuiButtonBase-root > .MuiButton-label').click();
        cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
            .clear()
            .type("1");
        cy.get('[data-test="button-bar-confirm"]').click();
        cy.contains("Fulfilled").should("be.visible");
    }

    orderPlace() {
        // cy.visit("https://cambaytigerstage-nh.farziengineer.co/product/chef-currated-butter-garlic-marinade");
        cy.visit("https://cambaytigerstage-nh.farziengineer.co/product/classic-makhani-curry");
        cy.get("#__next > div > div.showOnDesktop > div > div > main > div.product-container > div.product-page__product__info > div > div > div.sc-hBbWxd.ljHzFv > div > div.sc-fjhmcy.bxMHcK > div.sc-erNlkL.hdnBOk > div:nth-child(4) > section > div > button > span > div.undefined__mainText.sc-gzOgki.fSlvAH").click();
        cy.contains("Cart").eq(0).click();

        //product heading
        cy.get(".sc-htnqrb.dVayQT").should("be.visible");
        cy.wait(10000);
        cy.contains("proceed to checkout").click();
        cy.get('.Address_button__text__ved_d').click();
        cy.get("div[class='Delivery_slotTimeCont__ZNBHh'] div:nth-child(1)").click();
        cy.get(".Delivery_button__text__d8uUZ").click();
        cy.get(".payment_button__text__busIX");
    }

    removeMembership() {
        cy.visit("https://cambaytigerstageadmin.farziengineer.co/");
        cy.get("div[aria-label='customers']").click();
        cy.get("input[placeholder='Search Customer']").type("6388789049");
        cy.contains("Shubham-tester").click();
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1) > svg:nth-child(1) > path:nth-child(1)").click();
        cy.get("body > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > main:nth-child(2) > form:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(3) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > button:nth-child(2) > span:nth-child(1) > svg:nth-child(1)").click();
    }

    verifyDeliveryCharges() {
        cy.get('body').then((body) => {
            // you-may-also-like heading in valid pdp
            const delivery_charges = "Delivery Charges";
            // Check if the 404 error or continue button is present
            if (body.find(delivery_charges).length > 0) {
                // Log error message
                throw new Error('Delivery Charges are visible, test case failed.');
            }
        });
    }

    productcheckout() {
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
        // Get the current URL
        cy.wait(15000);

    }
}

export default new Membership();

