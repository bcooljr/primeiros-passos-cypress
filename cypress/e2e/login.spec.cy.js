describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: `[name="username"]`,
    passwordField: `[name="password"]`,
    loginButton: `.oxd-button`,
    dashboardTitle: `.oxd-topbar-header-title`,
    alertMessage: `.oxd-alert`
   
  }


  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField) .type('Admin')
    cy.get(selectorList.passwordField) .type('admin123')
    cy.get(selectorList.loginButton) .click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardTitle).contains('Dashboard')
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField) .type('Test')
    cy.get(selectorList.passwordField) .type('test')
    cy.get(selectorList.loginButton) .click()
    cy.get(selectorList.alertMessage)
    })


})