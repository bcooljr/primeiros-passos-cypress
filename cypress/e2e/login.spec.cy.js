import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {
  const selectorList = {
    usernameField: `[name="username"]`,
    passwordField: `[name="password"]`,
    loginButton: `.oxd-button`,
    dashboardTitle: `.oxd-topbar-header-title`,
    alertMessage: `.oxd-alert`,
    dashboardGrid: `.oxd-grid-3`
  }

  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userSuccess.username)
    cy.get(selectorList.passwordField) .type(userData.userSuccess.password)
    cy.get(selectorList.loginButton) .click()
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })


  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameField) .type(userData.userFail.username)
    cy.get(selectorList.passwordField) .type(userData.userFail.password)
    cy.get(selectorList.loginButton) .click()
    cy.get(selectorList.alertMessage)
    })


})