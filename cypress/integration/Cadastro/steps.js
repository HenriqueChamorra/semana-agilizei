/// <reference types = "cypress" />

let Chance = require('chance');
let chance = new Chance();


When(/^informar meus dados$/, () => {
	        //type
            cy.get('input[placeholder="First Name"]').type(chance.first())
            cy.get('input[ng-model^="Last"]').type(chance.last())
            cy.get('input[ng-model^="Email"]').type(chance.email())
            cy.get('input[ng-model^="Phone"]').type(chance.phone({formatted: false}))
    
            //check -> radio`s e checkBoxes 
            cy.get('input[value="FeMale"]').check()
            cy.get('input[type="CheckBox"]').check('Cricket')
            cy.get('input[type="CheckBox"]').check('Hockey')
    
            //select -> select e select2 (combos) 
            cy.get('select#Skills').select('Javascript')
            cy.get('select#countries').select('Argentina')
            cy.get('select#country').select('Australia', {force: true})
            cy.get('select#yearbox').select('1996')
            cy.get('select[ng-model^="month"]').select('February')
            cy.get('select#daybox').select('24')
    
            cy.get('input#firstpassword').type('Teste@123')
            cy.get('input#secondpassword').type('Teste@123')
    
            //attachFile -> input file 
            cy.get('input#imagesrc').attachFile('imagem-foto.png')
});

When(/^salvar$/, () => {
	cy.get('button#submitbtn').click()
});

Then(/^devo ser cadastrado com sucesso$/, () => {
    cy.wait('@postNewtable').then((resNewtable) => {
        //chai
        expect(resNewtable.status).to.eq(200)
    })

    cy.wait('@postUsertable').then((resUsertable) => {
        //chai
        expect(resUsertable.status).to.eq(200)
    })

    cy.wait('@getNewtable').then((resNewtable) => {
        //chai
        expect(resNewtable.status).to.eq(200)
    })

    cy.url().should('contain', 'WebTable')
});
