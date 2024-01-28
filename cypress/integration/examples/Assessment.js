/// <reference types="Cypress" />
 
describe('Adding product to the cart', function() 
{
 
it('My Test case',function() {
 
//1 user visits the website
cy.visit("https://www.automationexercise.com/")

//2 user clicks on cart to verify if cart is empty
cy.get('.shop-menu > .nav > :nth-child(3) > a').click()

//3 user adds products to the cart
cy.get('.nav > :nth-child(2) > a').click()
cy.get(':nth-child(2) > .panel-heading > .panel-title > a').click()
cy.get('#Men > .panel-body > ul > :nth-child(1) > a').click()

cy.on('uncaught:exception', () => false);
cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
cy.get('.modal-footer > .btn').click()
cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
cy.get('.modal-footer > .btn').click()
cy.get(':nth-child(5) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
cy.get('.modal-body > :nth-child(2)').click()



 

})
 
 
})
 
 
