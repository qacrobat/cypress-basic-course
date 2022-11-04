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

  it('successfully submits the form', () => {
    const firstName = 'John'
    const lastName = 'Doe'  
    const fullName = `${firstName} ${lastName}`

    cy.get('#first-name').type(firstName)
    cy.get('#last-name').type(lastName)
    cy.get('#email').type('johndoe@example.com')
    cy.get('#ticket-quantity').select("3")
    cy.get('#vip').check()

    cy.get('.agreement > fieldset')
      .should('contain', `I, ${fullName}, wish to buy 3 VIP tickets.`)

    cy.get('#friend').check()
    cy.get('#requests').type('IPA beer')
    cy.get('#agree').click()
    cy.get('#signature').type(`${fullName}`)
    cy.contains('Confirm Tickets').click()

    cy.get('.success').should('contain', 'Ticket(s) successfully ordered')
  })

  it('successfully submits the form using a support command', () => {
    const customer = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com'  
    }

    cy.fillMandatoryFields(customer)
    cy.contains('Confirm Tickets').click()

    cy.get('.success').should('contain', 'Ticket(s) successfully ordered')
  })
})