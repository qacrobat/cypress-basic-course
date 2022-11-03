/// <reference types="Cypress" />

describe('Ticketbox', () => {
  beforeEach(() => cy.visit('https://bit.ly/2XSuwCW'))

  it('fills out all the text input fields', () => {
    const firstName = 'John'
    const lastName = 'Doe'

    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#email').type('johndoe@example.com')
    cy.get('#requests').type('IPA beer')
    cy.get('#signature').type(`${firstName} ${lastName}`)
  })
})