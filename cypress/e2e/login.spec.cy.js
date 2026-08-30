describe('Orange HRM Tests', () => {
  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]') .type('Admin')
    cy.get('[name="password"]') .type('admin123')
    cy.get('.oxd-button') .click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-title').contains('Dashboard')
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('[name="username"]') .type('Test')
    cy.get('[name="password"]') .type('test')
    cy.get('.oxd-button') .click()
    cy.get('.oxd-alert')
    })


})