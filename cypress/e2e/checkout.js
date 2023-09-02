/// <reference types= "cypress" />


describe('add to cart and chekout ', () => {

    it('checkout', () => {

        cy.visit("https://www.automationteststore.com/")

        cy.get('#customer_menu_top > li > a').click()


cy.get('#loginFrm_loginname').type("user217")

cy.get('#loginFrm_password').type("217223344")

cy.get('#loginFrm > fieldset > .btn').click()
cy.get(':nth-child(1) > .active').click()

cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click()
cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
cy.get('.block_7 > .nav > .dropdown > .dropdown-toggle').click()

cy.get('#cart_checkout1').click()

cy.get('#checkout_btn').click()

cy.get('.maintext').should('include.text','Your Order Has Been Processed!')



        

       
           
         



          
  
  
  
    });

   
  });