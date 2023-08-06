describe('create form input', () => {
  it('submits', () => {
    cy.visit('http://localhost:4200')
    cy.get('[data-cy="title-input"]').type("Harry Potter 5").should('have.value', "Harry Potter 5")
    cy.get('[data-cy="author-input"]').type("J.K. Rowling").should('have.value', "J.K. Rowling")
    cy.get('[data-cy="genre-input"]').type("Fantasy").should('have.value', "Fantasy")
    cy.get('[data-cy="book-create"]').click()
  })
})