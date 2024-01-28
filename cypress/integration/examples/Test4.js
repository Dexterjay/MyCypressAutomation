/// <reference types="Cypress" />
 
describe('My Third Test Suite', function() 
{
 
it('My FirstTest case',function() {
 
 
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click()
//window:alert

cy.on('window:alert', (str)=>
{
    //Mocha
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})

cy.on('window:confirm', (str)=>
{
    //Mocha
    expect(str).to.equal('Hello , Are you sure you want to confirm?')

})

cy.get("#opentab").invoke('removeAttr', 'target').click();

cy.origin("https://www.qaclickacademy.com",()=>
{
    cy.get("#navbarSupportedContent a[href*='about']").click();
    cy.get(".mt-50 h2").should('contain', 'QAClick Academy');
})
}  )
 
}  )