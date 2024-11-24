class Home {
    clearCart(){
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
    }
}