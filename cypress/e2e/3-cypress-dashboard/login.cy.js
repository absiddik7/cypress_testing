import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on('uncaught:exception', (err, runnable)=>{
    return false
})

Given('I go to the url https://cypress-dashboard.onrender.com/login/?next=/dashboard/', () => {
    cy.visit('https://cypress-dashboard.onrender.com/login/?next=/dashboard/')
    //cy.contains('Welcome to Cart.com')
})
 
When("I enter valid email", ()=>{
    cy.get('input[name="username"]').eq(1).type('test12@testing.com')
})

And("I enter valid password", ()=>{
    cy.get('input[name="password"]').type('test56@testing.com')
})

And("I click on the Log in button", () =>{
    cy.get('.login').get('button').eq(1).click()
})

Then("I land on organization dashboard page", ()=>{
    //cy.contains('Dashboard')
})











//describe('should login', () => {
//	// should not login with wrong credentials
//	it('should not login with wrong credentials', () => {
//		cy.visit('https://cypress-dashboard.onrender.com/login/?next=/dashboard/')
//		cy.get('input[name="username"]').eq(1).type('test12@testing.com')	
//		cy.get('input[name="password"]').type('test56@testing.com')
//		cy.get('.login').get('button').eq(1).click()
//	})

//	it('should login with correct credentials', () => {
//		cy.visit('https://cypress-dashboard.onrender.com/login/?next=/dashboard/')
//		cy.get('input[name="username"]').eq(1).type('test@testing.com')
//		cy.get('input[name="password"]').type('test@testing.com')
//		cy.get('.login').get('button').eq(1).click()
//	})

	


//})




   