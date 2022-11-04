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

  it('select two tickets', () => {
    cy.get('#ticket-quantity').select("2")

  })

  it('select the VIP ticket type', () => {
    cy.get('#vip').check()
  })

  it('select social media checkboxes', () => {
    cy.get('#social-media').check()
  })

  it('checks friend and publication, then unchecks friend', () => {
    cy.get('#friend').check()
    cy.get('#publication').check()
    cy.get('#friend').uncheck()
  })

  it('resets the form after filling the first name', () => {
    const firstName = 'David'
    
    cy.get('#first-name').type(firstName)
    cy.get('.agreement > fieldset').should('contain', firstName)

    cy.get('.reset').click()
    cy.get('.agreement > fieldset').should('not.contain', firstName)
  })

  it('has TICKETBOX heading', () => {
    cy.get('h1').should('contain', 'TICKETBOX')
  })
})