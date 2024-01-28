describe ( 'Testlio' , function() {


    it ('test case', function (){

        cy.visit('www.google.com')
        cy.get('#APjFqb').type('testlio')
        cy.get('.FPdoLc > center > .gNO89b').click()
        cy.contains('Become A Tester')
    })
})